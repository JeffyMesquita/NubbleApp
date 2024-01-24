import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState<string>('');

  const {createComment} = usePostCommentCreate(postId);

  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      placeholder="Escreva um comentário..."
      value={message}
      onChangeText={setMessage}
      onPressSend={onPressSend}
    />
  );
}
