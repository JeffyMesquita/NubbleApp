import React from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icons/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.95;

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon name="checkRound" color="success" />
      <Text
        style={{
          flexShrink: 1,
        }}
        preset="paragraphMedium"
        bold>
        Toast Component
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  borderRadius: 's16',
  padding: 's16',
  flexDirection: 'row',
  gap: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
