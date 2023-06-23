import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';

import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icons/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 24,
          }}>
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
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
