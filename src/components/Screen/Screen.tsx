import React from 'react';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Box} from '../Box/Box';
import {Icon} from '../Icons/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  canGoBack?: boolean;
  children: React.ReactNode;
}

export function Screen({canGoBack = false, children}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box
      paddingHorizontal="s24"
      style={{
        paddingTop: top,
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
  );
}
