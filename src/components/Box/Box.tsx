import { TouchableOpacity } from 'react-native';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  spacing,
  layout,
  border,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();

export const TouchableOpacityBox = createRestyleComponent([
  backgroundColor,
  spacing,
  layout,
  border,
], TouchableOpacity);
