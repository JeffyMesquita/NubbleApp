import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text
        preset="headingLarge"
        style={{
          color: 'red',
        }}>
        Hello World
      </Text>
      <Text
        preset="headingLarge"
        style={{
          color: 'gray',
          fontFamily: 'Satoshi-Italic'
        }}>
        Hello World
      </Text>
    </SafeAreaView>
  );
}

export default App;
