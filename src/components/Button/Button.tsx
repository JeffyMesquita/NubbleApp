import { useTheme } from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import { Theme } from '../../theme/theme';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {
    
  } = useTheme<Theme>();

  return (
    <TouchableOpacity>
      <Text
        preset="paragraphMedium"
        bold
        style={{
          color: '#fff',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
