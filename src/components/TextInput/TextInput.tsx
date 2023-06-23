import React, {ReactElement, useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    padding: 's16',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box 
      {...boxProps}
    >
      <Pressable onPress={focusInput}>
        <Box>
          <Text mb="s4" preset="paragraphMedium" bold>
            {label}
          </Text>
          <Box {...$textInputContainer}>
            <RNTextInput
              ref={inputRef}
              placeholderTextColor={colors.gray4}
              style={$textInputStyle}
              {...rnTextInputProps}
            />
            {RightComponent && (
              <Box ml='s16' justifyContent='center'>
                {RightComponent}
              </Box>
            )}
          </Box>
          {errorMessage && (
            <Text mt="s8" color="error" preset="paragraphSmall" bold>
              {errorMessage}
            </Text>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
