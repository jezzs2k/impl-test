import React from 'react';
import {Image, TouchableOpacity, ViewStyle, StyleProp} from 'react-native';

import {widthPercentageToDP} from '../../utils';

export const LINK_IMAGE_DEFAULT =
  'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg';

type AvatarPropType = {
  uri?: string;
  size?: number;
  styleAvatar?: StyleProp<ViewStyle>;
  borderWidth?: number;
  onPress?: () => void;
  activeOpacity?: number;
  borderColor?: string;
};

export const Avatar = ({
  uri,
  size,
  styleAvatar,
  borderWidth,
  onPress,
  activeOpacity,
  borderColor,
}: AvatarPropType) => (
  <TouchableOpacity
    style={[styleAvatar]}
    onPress={onPress}
    accessibilityRole={'button'}
    activeOpacity={activeOpacity}>
    <Image
      source={{uri}}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}
    />
  </TouchableOpacity>
);

Avatar.defaultProps = {
  uri: LINK_IMAGE_DEFAULT,
  size: widthPercentageToDP(20),
  styleAvatar: {},
  borderWidth: 0,
  onPress: () => {},
  activeOpacity: 1,
  borderColor: '#fff',
};
