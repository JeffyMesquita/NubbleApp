import React from 'react';

import {Icon, Text} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  NewPostScreen,
  FavoriteScreen,
  MyProfileScreen,
} from '@screens';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              preset="paragraphCaption"
              semiBold
              color={focused ? 'primary' : 'backgroundContrast'}>
              Início
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'homeFill' : 'home'}
              color={focused ? 'primary' : 'backgroundContrast'}
            />
          ),
        }}
      />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
