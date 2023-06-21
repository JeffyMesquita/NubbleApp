import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
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
  );
}

export default App;
