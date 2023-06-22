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

          <Icon name="eyeOff" color='carrotSecondary' size={50} />
          <Icon name="eyeOn" color='error' size={78} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
