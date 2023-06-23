import React from 'react';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Box} from '../Box/Box';
import {Icon} from '../Icons/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { useAppTheme } from '../../hooks/useAppTheme';

interface ScreenProps {
  canGoBack?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
}

export function Screen({canGoBack = false, scrollable, children}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const { colors} = useAppTheme()

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        backgroundColor={colors.background}
      >
        <Box
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row" alignItems="center" gap="s8">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" bold>
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
