import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {getRepos, getUser} from '../../stores/Actions';
import {RootState} from '../../stores';
import {PrimaryButton} from '../../components/Buttons';
import {
  heightPercentageToDP,
  responsiveFontSetting,
  widthPercentageToDP,
} from '../../utils';
import {UserDetail} from '../../components/user';
import {BOSLoader} from '../../components/SpinnerLoader';
import {RepoItem} from '../../components/Repos';
import {KEY_CONFIG_URL} from '../../config';

export const UserDetailScreen = () => {
  const route: any = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [pageNum, setPageNum] = useState(1);

  const username = route.params?.username;

  const {user, loading}: {user: any; loading: boolean} = useSelector(
    (state: RootState) => state.githubUser,
  );
  const {
    repos,
    loading: loadinRepos,
    error,
  }: {repos: any; loading: boolean; error: any} = useSelector(
    (state: RootState) => state.githubRepo,
  );

  const {repos_url, public_repos} = user[username] || {};

  const handleLoadMore = (page: number) => {
    dispatch(
      getRepos(repos_url + '?' + KEY_CONFIG_URL + `&page=${page}`, username),
    );
    setPageNum(page);
  };

  useEffect(() => {
    navigation.setOptions({
      title: username ?? 'Loading process',
    });

    !user[username] && username && dispatch(getUser(username));
  }, [dispatch, navigation, username, user]);

  useEffect(() => {
    if (repos_url && !repos?.[username]) {
      dispatch(
        getRepos(repos_url + '?' + KEY_CONFIG_URL + `&page=${1}`, username),
      );
    }
  }, [dispatch, repos, repos_url, username]);

  return (
    <FlatList
      data={repos?.[username] || []}
      renderItem={({item}) => <RepoItem item={item} navigation={navigation} />}
      ListHeaderComponent={
        <React.Fragment>
          <View style={styles.listHeader}>
            {error ? (
              <Text style={styles.errorStyle}>An error occurred</Text>
            ) : null}
          </View>
          {loading ? <BOSLoader /> : <UserDetail item={user[username]} />}
        </React.Fragment>
      }
      ListFooterComponent={
        <View style={styles.footerComp}>
          {loadinRepos ? <BOSLoader /> : null}
          {!loading &&
          public_repos &&
          public_repos > 30 &&
          public_repos !== repos?.[username]?.length ? (
            <PrimaryButton
              titleBtn={'Load more'}
              btnStyle={styles.btnStyle}
              titleStyle={styles.titleStyle}
              disabled={loadinRepos}
              onPress={() => handleLoadMore(pageNum + 1)}
            />
          ) : null}
        </View>
      }
      keyExtractor={(item: any) => `${item.id}`}
    />
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: widthPercentageToDP(40),
    borderRadius: 8,
  },
  titleStyle: {
    fontWeight: '700',
  },
  footerComp: {
    width: '100%',
    alignItems: 'center',
    marginVertical: heightPercentageToDP(3),
  },
  errorStyle: {
    color: 'red',
    fontSize: responsiveFontSetting(2.4),
  },
  listHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
