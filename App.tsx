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
        preset="headingSmall"
        style={{
          color: 'red',
        }}>
        Hello World
      </Text>
      <Text
        preset="paragraphCaption"
        style={{
          color: 'purple',
        }}>
        Hello World
      </Text>
    </SafeAreaView>
  );
}

export default App;
