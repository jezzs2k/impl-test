import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {responsiveFontSetting} from '../../utils';

type ShowTextItemProptype = {
  title: string;
  keyItem: string;
  textStyle?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>;
};

export const ShowTextItem = ({
  title,
  keyItem,
  textStyle = {},
  subTextStyle = {},
}: ShowTextItemProptype) => {
  return title ? (
    <Text style={[styles.textStyle, styles.textNomal, textStyle]}>
      {keyItem}: <Text style={[styles.textBold, subTextStyle]}>{title}</Text>
    </Text>
  ) : null;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: responsiveFontSetting(2),
  },
  textBold: {
    fontWeight: '700',
    fontSize: responsiveFontSetting(2.1),
    color: '#2c3e50',
  },
  textNomal: {
    fontSize: responsiveFontSetting(2.3),
    fontWeight: '200',
    fontStyle: 'italic',
  },
});
