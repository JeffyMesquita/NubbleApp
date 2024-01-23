import React from 'react';

import {Box, ProfileAvatar, Text} from '@components';
import {Post} from '@domain';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {author.userName}
      </Text>
    </Box>
  );
}
