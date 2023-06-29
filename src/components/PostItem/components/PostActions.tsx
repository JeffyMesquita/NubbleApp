import React from 'react';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    // TODO: Implement likePost
  }

  function navigateToComments() {
    // TODO: Implement navigateToComments
  }

  function favoritePost() {
    // TODO: Implement favoritePost
  }

  return (
    <Box flexDirection="row" gap="s24" mt="s16">
      <Item
        marked={true}
        onPress={likePost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
      />

      <Item
        marked={false}
        onPress={navigateToComments}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
      />

      <Item
        marked={false}
        onPress={favoritePost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {default: IconProps['name']; marked: IconProps['name']};
  text: number;
}

function Item({onPress, marked, icon, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      gap="s4">
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
