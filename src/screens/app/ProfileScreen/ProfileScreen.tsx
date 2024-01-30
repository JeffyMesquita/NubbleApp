import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user, refetch, isFetching} =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Erro ao carregar o perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center" flex={1}>
            <ProfileAvatar
              imageURL={user?.profileUrl}
              size={64}
              borerRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user?.fullName}
            </Text>
            <Text>@{user?.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
