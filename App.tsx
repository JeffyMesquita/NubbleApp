import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';

import {theme} from './src/theme/theme';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icons/Icon';

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

          <Icon name="eyeOff" />
          <Icon name="eyeOn" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
