import React, { useState } from 'react';
import { Icon } from '../Icons/Icon';
import { TextInput, TextInputProps } from '../TextInput/TextInput';

export type PasswordInputPros = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputPros) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
