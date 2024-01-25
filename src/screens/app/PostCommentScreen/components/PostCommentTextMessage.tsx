import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [message, setMessage] = useState<string>('');

  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
    },
  });

  return (
    <TextMessage
      placeholder="Escreva um comentário..."
      onPressSend={createComment}
      value={message}
      onChangeText={setMessage}
    />
  );
}
