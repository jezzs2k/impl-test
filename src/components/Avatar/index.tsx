import React from 'react';
import {Image, View, ViewStyle, StyleProp} from 'react-native';

import {widthPercentageToDP} from '../../utils';

export const LINK_IMAGE_DEFAULT =
  'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg';

type AvatarPropType = {
  uri?: string;
  size?: number;
  styleAvatar?: StyleProp<ViewStyle>;
  borderWidth?: number;
};

export const Avatar = ({
  uri,
  size,
  styleAvatar,
  borderWidth,
}: AvatarPropType) => (
  <View style={[styleAvatar || {}]}>
    <Image
      source={
        uri
          ? {uri}
          : {
              uri: LINK_IMAGE_DEFAULT,
            }
      }
      style={{
        width: size || widthPercentageToDP(20),
        height: size || widthPercentageToDP(20),
        borderRadius: (size || widthPercentageToDP(20)) / 2,
        borderWidth: borderWidth || 0,
      }}
    />
  </View>
);
