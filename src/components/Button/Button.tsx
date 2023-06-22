import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {buttonPresets} from './buttonPresets';

export type ButtonPresets = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const {} = useTheme<Theme>();

  const buttonPreset = buttonPresets[preset];
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
