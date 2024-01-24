import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box, Screen, TextMessage} from '@components';
import {PostComment, usePostCommentList} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const [message, setMessage] = useState<string>('');

  const postId = route.params.postId;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  function onPressSend() {}

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

        <TextMessage
          placeholder="Escreva um comentário..."
          value={message}
          onChangeText={setMessage}
          onPressSend={onPressSend}
        />
      </Box>
    </Screen>
  );
}
