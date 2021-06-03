import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Subject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import axios from 'axios';

import {UserItem} from '../../components/user';
import {SearchComp} from '../../components/SearchComp';
import {BOSLoader} from '../../components/SpinnerLoader';
import {RootState} from '../../stores';
import {getUsers} from '../../stores/Actions';
import {
  generateText,
  heightPercentageToDP,
  responsiveFontWidth,
} from '../../utils';
import {getUsersURL} from '../../config';

interface SearchGithubUserType extends Observable<any> {
  next: (text: string) => void;
  complete: () => void;
  error: (error: any) => void;
}

let searchGithub$: SearchGithubUserType = new Subject();

export const UserScreen = ({navigation}) => {
  const [dataUser, setDateUser] = useState([]);
  const [isSearching, setIsSearch] = useState(false);
  const [hasError, setError] = useState(null);

  const dispatch = useDispatch();

  const {users, loading}: any = useSelector(
    (state: RootState) => state.githubUser,
  );

  const handleSearchUser = useCallback(() => {
    searchGithub$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(async (text: string) => {
          const response = await axios.get(
            getUsersURL(text ? text : generateText(2)),
          );
          return response.data;
        }),
      )
      .subscribe({
        next: (data: any) => {
          data?.items && setDateUser(data?.items);
          isSearching && setIsSearch(false);
          setError(null);
        },
        error: (error: any) => {
          isSearching && setIsSearch(false);
          setError(error);
        },
        complete: () => {
          setError(null);
        },
      });
  }, [isSearching]);

  const handleChangeText = (text: string) => {
    !isSearching && setIsSearch(true);
    searchGithub$.next(text);
  };

  useEffect(() => {
    handleSearchUser();
  }, [handleSearchUser]);

  useEffect(() => {
    dispatch(getUsers(generateText(2)));
  }, [dispatch]);

  useEffect(() => {
    if (users?.items) {
      setDateUser(users.items);
    }
  }, [users]);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <React.Fragment>
          <SearchComp
            textTitle={'Search user'}
            onchangeText={handleChangeText}
          />
          <View style={styles.errorContainer}>
            {hasError && !loading && !isSearching ? (
              <Text style={styles.textError}>An error occurred</Text>
            ) : null}
          </View>
        </React.Fragment>
      }
      ListFooterComponent={
        loading || isSearching ? (
          <React.Fragment>
            <BOSLoader />
            <BOSLoader />
            <BOSLoader />
          </React.Fragment>
        ) : null
      }
      data={!isSearching ? dataUser : []}
      renderItem={({item}: {item: any; index: number}) => (
        <UserItem navigation={navigation} item={item} />
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
  errorContainer: {
    backgroundColor: '#fff',
    marginTop: heightPercentageToDP(1),
    alignItems: 'center',
  },
  textError: {
    color: 'red',
    fontWeight: '700',
    fontSize: responsiveFontWidth(3.5),
    paddingVertical: heightPercentageToDP(1),
  },
});
