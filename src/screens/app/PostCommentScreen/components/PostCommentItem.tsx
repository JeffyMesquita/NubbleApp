import React from 'react';
import {Alert, Pressable} from 'react-native';

import {Box, ProfileAvatar, Text} from '@components';
import {PostComment, postCommentService, usePostCommentRemove} from '@domain';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  userId,
  postAuthorId,
  onRemoveComment,
}: Props) {
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable onLongPress={confirmRemove} disabled={!isAllowToDelete}>
      <Box mb="s16" flexDirection="row" gap="s12" alignItems="center">
        <ProfileAvatar imageURL={postComment.author.profileUrl} />
        <Box flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
