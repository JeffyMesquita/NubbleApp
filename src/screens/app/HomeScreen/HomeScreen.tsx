import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Box, Screen, Text} from '@components';
import {Post, postService} from '@domain';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Box gap="s4" mb="s24">
        <Box flexDirection="row" gap="s8">
          <Image
            source={{uri: item.author.profileURL}}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
            }}
          />
          <Text semiBold>{item.author.userName}</Text>
        </Box>
        <Image
          source={{uri: item.imageURL}}
          resizeMode="cover"
          style={{width: Dimensions.get('screen').width, height: 250}}
        />
        <Text>{item.text}</Text>
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
