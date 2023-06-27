## Tips and Tricks, and other useful information

### 1. How to use custom fonts in React Native

#### Custom Fonts - Android

To use custom fonts in Android specific code, you need to add in folder `Android` a folder `assets` and inside add other fold `fonts` and put your fonts there. After that, you need run the command `npm run android` or `yarn android` to generate the fonts in the Android project.

#### Custom Fonts - iOS

To use custom fonts in iOS specific code, you need to go to the folder `ios` in the project and open the file `YourApp.xworkspace` in Xcode. After that, you need to go to the folder `YourApp` what is in side of the folder with the same name of your project `YourApp` and after that create a `New Group` with name `fonts` and put your fonts there. After that, you go to file `info` and then add a new row and select the option `Fonts provided by application` and add the name of your fonts there.
Is necessary to write the name of the fonts with the extension, for example: `Roboto-Regular.ttf`.
After that, you need run the command `npm run ios` or `yarn ios` to generate the fonts in the iOS project.

obs: to run the command `npm run ios` or `yarn ios` you need to have the Xcode installed in your machine and have a Mac OS.

You can go directly to the file `info.plist` inside of folders `ios/YourApp` and add fonts there, with the following code:

```xml
<key>UIAppFonts</key>
<array>
  <string>Roboto-Regular.ttf</string>
  <string>Roboto-Bold.ttf</string>
  <string>Roboto-Italic.ttf</string>
  <string>Roboto-BoldItalic.ttf</string>
</array>
```

This option too need to run the command `npm run ios` or `yarn ios` to generate the fonts in the iOS project.

### 2. Using Restyle for Theme and UI components

#### Restyle

Restyle is a framework for building UI components with a style props API, written in TypeScript and inspired by React Native's StyleSheet, with themes inspired by Theme UI.

#### Installation

To install Restyle, you need to run the following command:

```bash
npm install @shopify/restyle
```

or

```bash
yarn add @shopify/restyle
```

#### Usage

In `src` folder create a folder `theme` and inside create a file `theme.ts` and put the following code:

```typescript
import {createTheme} from '@shopify/restyle';

const palette = {
  purple: '#5A31F4',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#F4F4F4',
  lightGray: '#EAEAEA',
  darkGray: '#8A8A8A',
};

const theme = createTheme({
  colors: {
    primary: palette.purple,
    white: palette.white,
    black: palette.black,
    gray: palette.gray,
    lightGray: palette.lightGray,
    darkGray: palette.darkGray,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  ...otherProps,
});

export type Theme = typeof theme;

export default theme;
```

### 3. Using SVG in React Native

#### React Native SVG

React Native SVG is a SVG library for React Native, it provides SVG support for React Native, whether with react-native-svg or ART.

#### Installation

To install React Native SVG, you need to run the following command:

```bash
npm install react-native-svg
```

or

```bash
yarn add react-native-svg
```

Note: In iOs you need to run the following command:

```bash
cd ios && pod install && cd ..
```

and following run the command:

```bash
npm run ios
```

or

```bash
yarn ios
```

and too, you need to run the command:

```bash
npm run android
```

or

```bash
yarn android
```

#### Usage 

Your use SVG in your project, you need to import the SVG component from `react-native-svg` and use in your code, for example:

```typescript
import React from 'react';
import {View, Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

const App = () => {
  return (
    <View>
      <Text>React Native SVG</Text>
      <Svg height="50" width="50">
        <Circle cx="25" cy="25" r="25" fill="purple" />
      </Svg>
    </View>
  );
};

export default App;
```

### 4. Using Safe Area Context

#### Safe Area Context

Safe Area Context is a React Native library that provides a flexible way to handle safe area, also works on Android and Web using react-native-web.

#### Installation

To install Safe Area Context, you need to run the following command:

```bash
npm install react-native-safe-area-context
```

or

```bash
yarn add react-native-safe-area-context
```

Is necessary to run the command:

```bash
cd ios && pod install && cd ..
```

and following run the command:

```bash
npm run ios
```

or

```bash
yarn ios
```

and too, you need to run the command:

```bash
npm run android
```

or

```bash
yarn android
```

#### Usage

To use Safe Area Context, you need to import the SafeAreaProvider component from `react-native-safe-area-context` and use in your code, for example:

```typescript
import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Safe Area Context</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
```


### 5. Using React Navigation

#### React Navigation

React Navigation is a library that provides a way to navigate between screens and manage navigation state in a React Native app.

#### Installation

To install React Navigation, you need to run the following command:

```bash
npm install @react-navigation/native
```

or

```bash
yarn add @react-navigation/native
```

If you until not have installed the `react-native-safe-area-context`, you need to run the following command:

```bash
npm install react-native-safe-area-context
```

or

```bash
yarn add react-native-safe-area-context
```

The next step is install `react-native-screes`, to do this, you need to run the following command:

```bash
npm install react-native-screens
```

or

```bash
yarn add react-native-screens
```

And following, you need to run the command:

```bash
cd ios && pod install && cd ..
```

and following run the command:

```bash
npm run ios
```

or

```bash
yarn ios
```

In android its necessary one more step, `react-native-screens` package requires you to make some additional changes to complete the installation and link on Android by configuration step to properly work on Android devices. Edit `MainActivity.java` file which located in `android/app/src/main/java/<your package name>/MainActivity.java` and add the following lines:

```java
public class MainActivity extends ReactActivity {
  // ...
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
    }
  // ...
}
```

And add to top of the file:

```java
import android.os.Bundle; // <- add this necessary import
```

and too, you need to run the command:

```bash
npm run android
```

or

```bash
yarn android
```

#### Optional installation steps

You can create a folder `routes` in side of `src` folder, and create a file `index.tsx` in side of `routes` folder and make your routes schema for yous App. 

#### Usage

To use React Navigation, you need to import the NavigationContainer component from `@react-navigation/native` and use in your code, for example:

```typescript
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>React Navigation</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
```

### 6. Using React Navigation Stack

#### React Navigation Stack

React Navigation Stack is a library that provides a way to navigate between screens and manage navigation state in a React Native app.

#### Installation

To install React Navigation Stack, you need to run the following command:

```bash
npm install @react-navigation/native-stack
```

or

```bash
yarn add @react-navigation/native-stack
```

Don't forget to run the command:

```bash
cd ios && pod install && cd ..
```

and following run the command:

```bash
npm run ios
```

or

```bash
yarn ios
```

and too, you need to run the command:

```bash
npm run android
```

or

```bash
yarn android
```

#### Usage

To use React Navigation Stack, you need to import the createStackNavigator component from `@react-navigation/native-stack` and use in your code, for example:

```typescript
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Here you can import your screens
import {Login} from './src/screens/Login';
import {Home} from './src/screens/Home';
// ...

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### 7. Using React Hook Form

#### React Hook Form

React Hook Form is a library that provides a way to manage forms in a React Native application.

#### Installation

To install React Hook Form, you need to run the following command:

```bash
npm install react-hook-form
```

or

```bash
yarn add react-hook-form
```

obs: in this project, we will use the `react-hook-form` in version `7.43.9`, then you need to run the following command:

```bash
npm install react-hook-form@7.43.9
```

or

```bash
yarn add react-hook-form@7.43.9
```

#### Usage

To use React Hook Form, you need to import the useForm component from `react-hook-form` and use in your code, for example:

```typescript
import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';

const App = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      <Text>React Hook Form</Text>
      <InputText
        name="name"
        control={control}
        placeholder="Name"
        defaultValue=""
      >
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default App;
```

### 8. Using Zod Validation

#### Zod Validation

Zod Validation is a library that provides a way to validate forms in a React Native application using the `react-hook-form` library.

#### Installation

To install Zod Validation, you need to run the following command:

```bash
npm install zod
```

or

```bash
yarn add zod
```

And install the `@hookform/resolvers` library to link `react-hook-form` with `zod`, you need to run the following command:

```bash
npm install @hookform/resolvers
```

or

```bash
yarn add @hookform/resolvers
```


#### Usage

To use Zod Validation, you need to import the zod component from `zod` and use in your code, for example:

```typescript
import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(3).max(50).nonempty(),
  email: z.string().email(),
});

const App = () => {
  const {control, handleSubmit} = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View>
      <Text>React Hook Form</Text>
      <InputText
        name="name"
        control={control}
        placeholder="Name"
        defaultValue=""
      >
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default App;
```




