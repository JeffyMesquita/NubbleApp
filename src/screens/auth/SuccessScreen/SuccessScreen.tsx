import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Icon } from '../../../components/Icons/Icon';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';

export function SuccessScreen() {

  function goBackToBegin() {
    //TODO: implementar
  }
  return (
    <Screen>
      <Icon name="check" size={80} color="greenPrimary" />

      <Text mt="s24" mb="s32" preset="headingLarge">
        Sua conta foi criada com sucesso!
      </Text>

      <Text mb="s16" preset="paragraphLarge">
        Agora você já pode fazer login e aproveitar todos os recursos do app.
      </Text>

      <Button 
        mt="s40"
        onPress={goBackToBegin}
        title="Voltar ao início"
      />
    </Screen>
  );
};
