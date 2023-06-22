import { useTheme } from '@shopify/restyle';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Theme } from '../../theme/theme';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading, ...touchableOpacityBoxProps}: ButtonProps) {
  const {} = useTheme<Theme>();

  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}
      >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color="primaryContrast"
          >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
