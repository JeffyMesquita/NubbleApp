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




