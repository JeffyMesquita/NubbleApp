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

### 9. Using Babel Plugin Module Resolver

#### Babel Plugin Module Resolver

Babel Plugin Module Resolver is a library that provides a way to create aliases for your project.

#### Installation

To install Babel Plugin Module Resolver, you need to run the following command:

```bash
npm install babel-plugin-module-resolver --save-dev
```

or

```bash
yarn add babel-plugin-module-resolver --dev
```

#### Usage

To use Babel Plugin Module Resolver, you need to create a file `babel.config.js` in the root of your project and add the following code:

```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  //♂ add this code  ♂
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@services': './src/services',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
          '@types': './src/types',
        },
      },
    ],
  ],
};
```

And in your `tsconfig.json` file, you need to add the following code:

```json
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  //♂ add this code  ♂
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      // If you want all files to be imported from the root of the project, you can use the following code:
      "@components/*": ["src/components/*"],
      "@screens/*": ["src/screens/*"],
      "@routes/*": ["src/routes/*"],
      ... // and more
      // If you want to import files from a specific folder, you can use the following code:
      "@components": ["src/components"],
      "@screens": ["src/screens"],
      "@routes": ["src/routes"],
    }
  }
}
```

After this, you can import your files using the aliases, for example:

```typescript
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@components/Button';
import {InputText} from '@components/InputText';

const App = () => {
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

### 10. Fixing Warning `Require cycle`

#### Require cycle

Require cycle is a warning that occurs when you import a file that imports the file that is importing it, for example:

```typescript
// file: src/components/Button/index.tsx
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@components/Button'; //♂ here is the problem ♂

const Button = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export default Button;
```

To fix this warning, you need go to file what is importing itself and change the import.

### 11. ESLint

#### ESLint

ESLint is a library that provides a way to check your code for errors and warnings.

#### Installation

To install ESLint, you need to run the following command:

```bash
npm install eslint --save-dev
```

or

```bash
yarn add eslint --dev
```

#### Usage

To use ESLint, you need to create a file `.eslintrc.js` in the root of your project and add the following code:

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
```

And in your `package.json` file, you need to add the following code:

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ."
  }
}
```

After this, you can run the following command to check your code:

```bash
npm run lint
```

or

```bash
yarn lint
```

And you can add plugins how `eslint-plugin-import`, by example:

```bash
npm install eslint-plugin-import --save-dev
```

or

```bash
yarn add eslint-plugin-import --dev
```

And add the following code in your `.eslintrc.js` file:

```javascript
module.exports = {
  root: true,
  extends: '@react-native-community',
  // to fix `Delete `␍`eslint prettier/prettier` add this code
  rules: {
    'prettier/prettier': 0,
  },
  //♂ add this code  ♂
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@domains|routes|screens|components|hooks|theme)',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
```

### 12. Husky

#### Husky

Husky is a library that provides a way to run scripts before git commands.

#### Installation

To install Husky, you need to run the following command:

```bash
npm install husky --save-dev
```

or

```bash
yarn add husky -D
```

#### Usage

To use Husky, you need run the following command:

```bash
 npm pkg set scripts.prepare="husky install"
```

or

```bash
yarn pkg set scripts.prepare="husky install"
```

and run the following command:

```bash
npm run prepare
```

or

```bash
yarn prepare
```

And you need run the following command:

```bash
npx husky add .husky/pre-commit "npm test"
```

or

```bash
npx husky add .husky/pre-commit "yarn test"
```

### 13. React Navigation Bottom Tabs

#### React Navigation Bottom Tabs

React Navigation Bottom Tabs is a library that provides a way to create a bottom tab navigation.

#### Installation

To install React Navigation Bottom Tabs, you need to run the following command:

```bash
npm install @react-navigation/bottom-tabs
```

or

```bash
yarn add @react-navigation/bottom-tabs
```

#### Usage

To use React Navigation Bottom Tabs, you need to import the library and create a bottom tab navigation, for example:

```typescript
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '@screens/Home';
import {Profile} from '@screens/Profile';

const Tab = createBottomTabNavigator();
****
const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default App;
```

### 14. React devtools

#### React devtools

React devtools is a library that provides a way to inspect React components.

#### Installation

To install React devtools, you need to run the following command:

```bash
npm install -g react-devtools
```

or

```bash
yarn global add react-devtools
```

#### Usage

To use React devtools, you need to run the following command:

```bash
react-devtools
```

Some commands to use in React devtools to access adb:

```bash
adb reverse tcp:8097 tcp:8097
```

```bash
adb reverse --list
```

```bash
adb devices
```

Don't forget to enable the connection of the device with localhost API it's necessary to run the following command:

```bash
adb reverse tcp:3333 tcp:3333
```

### 15. Installing Axios

#### Axios

Axios is a library that provides a way to make HTTP requests.

#### Installation

To install Axios, you need to run the following command:

```bash
npm install axios
```

or

```bash
yarn add axios
```

### 16. Installing date-fns

#### date-fns

date-fns is a library that provides a way to format dates.

#### Installation

To install date-fns, you need to run the following command:

```bash
npm install date-fns
```

or

```bash
yarn add date-fns
```

### 17. Installing zustand

#### zustand

zustand is a library that provides a way to manage state in a React application.

#### Installation

To install zustand, you need to run the following command:

```bash
npm install zustand
```

or

```bash
yarn add zustand
```
