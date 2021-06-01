import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StackActions, useNavigation} from '@react-navigation/native';

import {
  heightPercentageToDP,
  responsiveFontSetting,
  widthPercentageToDP,
} from '../../utils';
import {Avatar} from '../Avatar';
import {LinkURL} from '../LinkURL';

type GithubItemPropType = {
  item: any;
};

export const UserItem = ({item}: GithubItemPropType) => {
  const navigation = useNavigation();

  const {avatar_url, login, type, html_url} = item;

  const pushAction = StackActions.push('UserDetail', {
    username: login,
  });

  const handleToDetailUser = () => {
    navigation.dispatch(pushAction);
  };

  return (
    <TouchableOpacity
      onPress={handleToDetailUser}
      style={styles.container}
      activeOpacity={0.8}>
      <View style={[styles.containerItem, styles.containerItemLeft]}>
        <Avatar uri={avatar_url} borderWidth={3} />
        <View style={styles.wrapperText}>
          <Text style={[styles.textStyle, styles.textBold]}>{login}</Text>
          <Text style={[styles.textStyle, styles.textNomal]}>{type}</Text>
        </View>
      </View>
      <View style={[styles.containerItem, styles.containerItemRight]}>
        <LinkURL url={html_url} />
        <TouchableOpacity
          style={styles.moreStyleBtn}
          onPress={handleToDetailUser}>
          <Text
            style={[styles.textNomal, styles.textSmall, styles.textBtnStyle]}>
            More
          </Text>
          <AntDesign name={'right'} size={responsiveFontSetting(1.8)} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: heightPercentageToDP(1),
    height: heightPercentageToDP(21),
  },
  containerItem: {
    paddingVertical: heightPercentageToDP(1),
  },
  textStyle: {
    fontSize: responsiveFontSetting(2),
  },
  textBold: {
    fontWeight: '700',
    fontSize: responsiveFontSetting(2.5),
  },
  link: {
    fontStyle: 'italic',
    textTransform: 'capitalize',
    fontSize: responsiveFontSetting(2),
    color: '#1068bf',
    textDecorationLine: 'underline',
  },
  textSmall: {
    fontSize: responsiveFontSetting(1.6),
    fontStyle: 'normal',
  },
  textNomal: {
    fontSize: responsiveFontSetting(2.7),
    fontWeight: '200',
    fontStyle: 'italic',
  },
  containerItemLeft: {},
  wrapperText: {
    marginTop: heightPercentageToDP(1),
  },
  containerItemRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  moreStyleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBtnStyle: {
    marginRight: widthPercentageToDP(1),
  },
});
