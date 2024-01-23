import React from 'react';
import {Image} from 'react-native';

interface ProfileAvatarProps {
  imageURL: string;
  size?: number;
  borerRadius?: number;
}

export function ProfileAvatar({
  imageURL,
  /** @default 32 */
  size = 32,
  /** @default 14 */
  borerRadius = 14,
}: ProfileAvatarProps) {
  return (
    <Image
      source={{
        uri: imageURL,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: borerRadius,
      }}
    />
  );
}
