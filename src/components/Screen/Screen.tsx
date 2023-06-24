import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icons/Icon';
import {Text} from '../Text/Text';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  canGoBack?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
}

export function Screen({canGoBack = false, scrollable, children}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
              alignItems="center"
              gap="s8">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" bold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
