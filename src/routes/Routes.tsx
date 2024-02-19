import React from 'react';

import {ActivityIndicator, Box} from '@components';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Router() {
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="background">
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
