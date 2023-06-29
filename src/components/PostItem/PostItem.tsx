import React from 'react';

import {Box, Text} from '@components';
import {Post} from '@domain';

import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box gap="s4" mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <Text>{post.text}</Text>
    </Box>
  );
}
