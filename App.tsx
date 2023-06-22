import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';

import {Text} from './src/components/Text/Text';

import {theme} from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';

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

          <Box mb="s20">
            <Text mb="s4" preset="paragraphLarge">
              E-mail
            </Text>
            <TextInput
              placeholder="Digite seu e-mail"
              style={{
                borderWidth: 1,
                height: 50,
              }}
            />
          </Box>

          <Box>
            <Text mb="s4" preset="paragraphLarge">
              Senha
            </Text>
            <TextInput
              placeholder="Digite sua senha"
              style={{
                borderWidth: 1,
                height: 50,
              }}
            />
          </Box>

          <Text mt="s10" color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />

          <Button title="Criar uma conta" mt="s12" preset='outline' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
