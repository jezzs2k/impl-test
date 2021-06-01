import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  heightPercentageToDP,
  responsiveFontSetting,
  widthPercentageToDP,
} from '../../utils';
import {Avatar} from '../Avatar';
import {LinkURL} from '../LinkURL';
import {BOSLoader} from '../SpinnerLoader';
import {ShowTextItem} from '../Text/ShowTextItem';

type UserDetailPropType = {
  item: any;
};

export const UserDetail = ({item}: UserDetailPropType) => {
  const {
    avatar_url,
    login,
    type,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
    email,
    public_repos,
    followers,
    following,
  } = item || {};

  if (!item) {
    return <BOSLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.containerItem, styles.containerItemLeft]}>
        {avatar_url ? <Avatar uri={avatar_url} borderWidth={3} /> : null}
        <View style={styles.wrapperText}>
          <Text style={[styles.textStyle, styles.textBold]}>
            {name ?? login}
          </Text>
          <ShowTextItem keyItem={'Type'} title={type} />
          <ShowTextItem keyItem={'Repos'} title={public_repos} />
          <ShowTextItem keyItem={'Company'} title={company} />
          {blog ? (
            <Text style={[styles.textStyle, styles.textNomal]}>
              Blog: {<LinkURL url={blog} title={blog} />}
            </Text>
          ) : null}
          <ShowTextItem keyItem={'Location'} title={location} />
          <ShowTextItem keyItem={'Email'} title={email} />
          <ShowTextItem keyItem={'Bio'} title={bio} />
          <ShowTextItem keyItem={'Twitter name'} title={twitter_username} />
        </View>
      </View>
      <View style={[styles.containerItem, styles.containerItemRight]}>
        <Text style={[styles.textNomal, styles.textSmall]}>
          {followers ?? 0} : followers
        </Text>
        <Text style={[styles.textNomal, styles.textSmall]}>
          {following ?? 0} : following
        </Text>
      </View>
    </View>
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
  styleOfText: {
    fontStyle: 'italic',
    textTransform: 'uppercase',
    fontSize: responsiveFontSetting(2.8),
  },
  textNomal: {
    fontSize: responsiveFontSetting(2.3),
    fontWeight: '200',
    fontStyle: 'italic',
  },
  textSmall: {
    fontSize: responsiveFontSetting(1.6),
    fontStyle: 'normal',
  },
  containerItemLeft: {
    maxWidth: widthPercentageToDP(70),
  },
  wrapperText: {
    marginTop: heightPercentageToDP(1),
  },
  containerItemRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  moreStyleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBtnStyle: {
    marginRight: widthPercentageToDP(1),
  },
});
