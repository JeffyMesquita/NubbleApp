import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../routes/Routes';

type ScreenPros = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenPros) {
  const {title, description, icon} = route?.params;

  function goBackToBegin() {
    //TODO: implementar
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...icon} />

      <Text mt="s24" mb="s32" preset="headingLarge">
        {title}
      </Text>

      <Text mb="s16" preset="paragraphLarge">
        {description}
      </Text>

      <Button mt="s40" onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  );
}
