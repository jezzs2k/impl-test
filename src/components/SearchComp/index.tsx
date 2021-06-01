import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  responsiveFontSetting,
  widthPercentageToDP,
} from '../../utils';

type SearchCompPropType = {
  onchangeText: (text: string) => void;
  textTitle: string;
  placeholder?: string;
};

export const SearchComp = ({
  onchangeText,
  textTitle,
  placeholder,
}: SearchCompPropType) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Text style={styles.textBold}>{textTitle}</Text>
      </View>
      <TextInput
        style={styles.textInputStyle}
        placeholder={placeholder ?? 'Search user ...'}
        onChangeText={onchangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(1),
  },
  containerItem: {
    marginBottom: heightPercentageToDP(1),
    paddingTop: heightPercentageToDP(1),
  },
  textStyle: {
    fontSize: responsiveFontSetting(2),
  },
  textBold: {
    fontWeight: '700',
    fontSize: responsiveFontSetting(2.5),
    textTransform: 'capitalize',
  },
  textInputStyle: {
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(3),
    borderWidth: 1,
    fontSize: responsiveFontSetting(2),
    borderRadius: 8,
    borderColor: '#bdc3c7',
  },
});
