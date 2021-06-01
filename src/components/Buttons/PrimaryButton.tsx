import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {heightPercentageToDP, responsiveFontWidth} from '../../utils';

export interface PrimaryButtonPropType {
  titleBtn: string;
  titleStyle?: StyleProp<ViewStyle | TextStyle>;
  onPress: () => void;
  disabled?: boolean;
  btnStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const PrimaryButton = ({
  titleBtn,
  titleStyle = {},
  onPress,
  disabled = false,
  btnStyle = {},
  loading = false,
}: PrimaryButtonPropType) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, btnStyle, disabled && styles.disableStyle]}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text
          style={[
            styles.titleStyle,
            titleStyle,
            disabled && styles.disableText,
          ]}>
          {titleBtn}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingHorizontal: 25,
    backgroundColor: '#000',
  },
  titleStyle: {
    color: 'white',
    fontSize: responsiveFontWidth(4.8),
    paddingVertical: heightPercentageToDP(1),
  },
  disableStyle: {
    backgroundColor: '#aaa69d',
  },
  disableText: {
    color: '#d1ccc0',
  },
});
