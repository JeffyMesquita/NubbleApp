import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icons/Icon';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function LoginScreen() {
  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's20',
        }}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{
          mb: 's10',
        }}
      />

      <Text mt="s10" color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />

      <Button title="Criar uma conta" mt="s12" preset="outline" />
    </Screen>
  );
}
