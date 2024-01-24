import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box, Screen} from '@components';
import {PostComment, usePostCommentList} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box justifyContent="space-between" flex={1}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: bottom,
          }}
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
        />

        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
