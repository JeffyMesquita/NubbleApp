import React from 'react';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';
import {useForm} from 'react-hook-form';

import {SignUpSchema, signUpSchema} from './SignUpSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua sua conta foi criada com sucesso!',
  description:
    'Agora você já pode fazer login e aproveitar todos os recursos do app.',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }
  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{
          mb: 's20',
        }}
      />

      <FormTextInput
        control={control}
        name="firstName"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{
          mb: 's20',
        }}
      />

      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{
          mb: 's20',
        }}
      />

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
          mb: 's48',
        }}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
