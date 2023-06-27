import React from 'react';

import {ActivityIndicator, Text} from '@components';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@theme';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

import {buttonPresets} from './buttonPresets';

export type ButtonPresets = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const {} = useTheme<Theme>();

  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      activeOpacity={0.7}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
