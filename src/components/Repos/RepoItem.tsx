import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, StackActions} from '@react-navigation/native';

import {
  heightPercentageToDP,
  responsiveFontSetting,
  widthPercentageToDP,
} from '../../utils';
import {ShowTextItem} from '../Text/ShowTextItem';

type ItemType = {
  name?: string;
  open_issues?: number;
  forks?: number;
  watchers?: number;
  description?: string;
  stargazers_count?: number;
  stargazers_url?: string;
  id?: number | string;
};

type RepoItemProptype = {
  item: ItemType;
  navigation: NavigationProp<any>;
};

export const RepoItem = ({item, navigation}: RepoItemProptype) => {
  const {
    name,
    open_issues,
    forks,
    watchers,
    description,
    stargazers_count,
    stargazers_url,
    id,
  } = item;

  const pushAction = StackActions.push('Stargazers', {
    urlStargazer: stargazers_url,
    repoId: id,
  });

  const handleToStargazers = () => {
    navigation.dispatch(pushAction);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperText}>
        <ShowTextItem
          keyItem="Repositories"
          title={name}
          textStyle={styles.textNomal}
          subTextStyle={styles.subTextStyle}
        />
        <ShowTextItem
          keyItem="Descriptions"
          title={description}
          textStyle={styles.textNomal}
          subTextStyle={styles.subTextStyle}
        />
        <ShowTextItem
          keyItem="Forks"
          title={String(forks)}
          textStyle={styles.textNomal}
          subTextStyle={styles.subTextStyle}
        />
        <ShowTextItem
          keyItem="Watchers"
          title={String(watchers)}
          textStyle={styles.textNomal}
          subTextStyle={styles.subTextStyle}
        />
        <ShowTextItem
          keyItem="Open Issues"
          title={String(open_issues)}
          textStyle={styles.textNomal}
          subTextStyle={styles.subTextStyle}
        />
      </View>
      <TouchableOpacity
        style={styles.containerItem}
        onPress={handleToStargazers}
        disabled={stargazers_count <= 0}>
        <Text style={styles.textNomal}>
          Stargazers: <Text style={styles.textBold}>{stargazers_count}</Text>
        </Text>
        <AntDesign
          name={'right'}
          size={responsiveFontSetting(2)}
          color={'#aaa69d'}
        />
      </TouchableOpacity>
    </View>
  );
};

RepoItem.defaultProps = {
  item: {
    open_issues: 0,
    forks: 0,
    watchers: 0,
    description: null,
    stargazers_count: 0,
  },
  navigation: null,
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(1),
    backgroundColor: '#fff',
    paddingVertical: heightPercentageToDP(0.5),
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
  },
  wrapperText: {
    maxWidth: widthPercentageToDP(55),
  },
  subTextStyle: {
    color: '#2c3e50',
    fontSize: responsiveFontSetting(1.8),
  },
  textStyle: {
    fontSize: responsiveFontSetting(2),
  },
  textBold: {
    fontWeight: '700',
    fontSize: responsiveFontSetting(1.8),
  },
  textNomal: {
    fontSize: responsiveFontSetting(2),
    fontWeight: '200',
    fontStyle: 'italic',
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
