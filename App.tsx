import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

import { theme } from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider
      theme={theme}
    >
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 24,
            gap: 16,
          }}>
          <Text preset="headingLarge">
            Hello World
          </Text>
          <Button title="Hello World" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
