import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';

import {theme} from './src/theme/theme';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';

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
          
          <EyeOffIcon
            color="blue"
            size={100}
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
