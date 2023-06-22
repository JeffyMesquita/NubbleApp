import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from './src/components/Text/Text';

import { Icon } from './src/components/Icons/Icon';
import { theme } from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 24,
            gap: 16,
          }}>
          <Text preset="headingLarge">Coffstack</Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <Icon name="arrowLeft" color="error" size={35} />
              <Icon name="arrowRight" color="error" size={35} />
              <Icon name="bell" color="error" size={35} />
              <Icon name="bellOn" color="error" size={35} />
              <Icon name="bookmark" color="error" size={35} />
              <Icon name="bookmarkFill" color="error" size={35} />
              <Icon name="camera" color="error" size={35} />
              <Icon name="chat" color="error" size={35} />
              <Icon name="chatOn" color="error" size={35} />
              <Icon name="check" color="error" size={35} />
              <Icon name="chevronRight" color="error" size={35} />
              <Icon name="comment" color="error" size={35} />
              <Icon name="eyeOff" color="carrotSecondary" size={35} />
              <Icon name="eyeOn" color="error" size={35} />
              <Icon name="flashOff" color="error" size={35} />
              <Icon name="flashOn" color="error" size={35} />
            </View>
            <View>
              <Icon name="heart" color="error" size={35} />
              <Icon name="heartFill" color="error" size={35} />
              <Icon name="home" color="error" size={35} />
              <Icon name="homeFill" color="error" size={35} />
              <Icon name="homeFill" color="error" size={35} />
              <Icon name="message" color="error" size={35} />
              <Icon name="newPost" color="error" size={35} />
              <Icon name="profile" color="error" size={35} />
              <Icon name="profileFill" color="error" size={35} />
              <Icon name="search" color="error" size={35} />
              <Icon name="settings" color="error" size={35} />
              <Icon name="trash" color="error" size={35} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
