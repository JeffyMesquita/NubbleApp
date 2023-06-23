import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
  const { colors } = useAppTheme();

  return (
    <Box>
      <Text mb="s4" preset="paragraphMedium" bold>
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray4}
          style={$textInputStyle}
          {...rnTextInputProps}
        />
      </Box>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
}

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  borderColor: 'gray4',
  borderRadius: 's12',
  padding: 's16',
}