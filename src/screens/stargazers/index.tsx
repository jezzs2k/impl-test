import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import {UserItem} from '../../components/user';
import {BOSLoader} from '../../components/SpinnerLoader';
import {RootState} from '../../stores';
import {heightPercentageToDP} from '../../utils';
import {getStargazers} from '../../stores/Actions/stargazers';
import {KEY_CONFIG_URL} from '../../config';

export const StargazersScreen = () => {
  const route: any = useRoute();

  const dispatch = useDispatch();
  const {urlStargazer, repoId} = route.params || {};

  const {stargazers, loading}: any = useSelector(
    (state: RootState) => state.stargazer,
  );

  useEffect(() => {
    urlStargazer &&
      repoId &&
      !stargazers[repoId] &&
      dispatch(getStargazers(urlStargazer + '?' + KEY_CONFIG_URL, repoId));
  }, [dispatch, repoId, stargazers, urlStargazer]);

  return (
    <FlatList
      style={styles.container}
      ListFooterComponent={
        loading ? (
          <React.Fragment>
            <BOSLoader />
            <BOSLoader />
            <BOSLoader />
          </React.Fragment>
        ) : null
      }
      data={stargazers?.[repoId] || []}
      renderItem={({item}: {item: any; index: number}) => (
        <UserItem item={item} />
      )}
      keyExtractor={(item: any) => `${item.id}`}
      getItemLayout={(data: any, index: number) => ({
        length: data.length ?? 0,
        offset: heightPercentageToDP(21) * index,
        index,
      })}
      keyboardDismissMode={'on-drag'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});
