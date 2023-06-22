import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';

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
            <Button title="Entrar" marginBottom='s24' />
            <Button loading title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
