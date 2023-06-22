import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';

import {theme} from './src/theme/theme';

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
          <Button title="Primary" marginBottom="s24" />
          <Button disabled title="Primary" marginBottom="s24" />
          <Button preset="outline" title="Outline" marginBottom="s24" />
          <Button disabled preset="outline" title="Outline" marginBottom="s24" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
