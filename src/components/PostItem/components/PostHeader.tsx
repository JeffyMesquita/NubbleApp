import React from 'react';
import {Pressable} from 'react-native';

import {Box, ProfileAvatar, Text} from '@components';
import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function handleProfilePress() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }
  return (
    <Pressable
      onPress={handleProfilePress}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" preset="paragraphMedium" semiBold>
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
