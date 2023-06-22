import {useTheme} from '@shopify/restyle';
import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBox} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  const {} = useTheme<Theme>();

  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          style={{
            color: '#fff',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
