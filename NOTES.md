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

