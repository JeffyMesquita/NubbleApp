import React from 'react';

import {Box, ProfileAvatar, Text} from '@components';
import {PostComment} from '@domain';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props) {
  return (
    <Box mb="s16" flexDirection="row" gap="s12" alignItems="center">
      <ProfileAvatar imageURL={postComment.author.profileUrl} />
      <Box>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  );
}
