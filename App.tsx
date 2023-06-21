import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text italic preset="headingLarge">Hello World</Text>
      <Text preset="headingMedium">Hello World</Text>
      <Text preset="headingSmall">Hello World</Text>
    </SafeAreaView>
  );
}

export default App;
