import React from 'react';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthScreenProps} from '@routes';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {LoginSchema, loginSchema} from './LoginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();

  const {isLoading, signIn} = useAuthSignIn({
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    signIn({email, password});
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's20',
        }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's20',
        }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Entrar"
        mt="s48"
      />

      <Button
        onPress={navigateToSignUpScreen}
        title="Criar uma conta"
        mt="s12"
        preset="outline"
      />
    </Screen>
  );
}
