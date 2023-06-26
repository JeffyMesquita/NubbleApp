import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/Routes';

import { Screen } from '../../../components/Screen/Screen';
import { Icon } from '../../../components/Icons/Icon';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';

type ScreenPros = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({
  route,
}: ScreenPros
) {
  const { title, description, icon} = route?.params;

  function goBackToBegin() {
    //TODO: implementar
  }
  return (
    <Screen>
      <Icon 
        {...icon}
      />

      <Text mt="s24" mb="s32" preset="headingLarge">
        {title}
      </Text>

      <Text mb="s16" preset="paragraphLarge">
        {description}
      </Text>

      <Button 
        mt="s40"
        onPress={goBackToBegin}
        title="Voltar ao início"
      />
    </Screen>
  );
};
