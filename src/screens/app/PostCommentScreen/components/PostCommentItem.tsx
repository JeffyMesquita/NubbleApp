import React from 'react';
import {Alert, Pressable} from 'react-native';

import {Box, ProfileAvatar, Text} from '@components';
import {PostComment, usePostCommentRemove} from '@domain';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props) {
  const {mutate} = usePostCommentRemove();

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
    <Pressable onLongPress={confirmRemove}>
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
