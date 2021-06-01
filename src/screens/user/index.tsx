import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import axios from 'axios';

import {UserItem} from '../../components/user';
import {SearchComp} from '../../components/SearchComp';
import {BOSLoader} from '../../components/SpinnerLoader';
import {RootState} from '../../stores';
import {getUsers} from '../../stores/Actions';
import {generateText, heightPercentageToDP} from '../../utils';
import {getUsersURL} from '../../config';

let searchMention$: any = new Subject();

export const UserScreen = () => {
  const [dataUser, setDateUser] = useState([]);
  const [isSearching, setIsSearch] = useState(false);

  const dispatch = useDispatch();

  const {users, loading}: any = useSelector(
    (state: RootState) => state.githubUser,
  );

  const handleSearchUser = useCallback(() => {
    searchMention$
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
        },
        error: (error: any) => {
          isSearching && setIsSearch(false);
        },
        complete: () => {
          console.log('Completed');
        },
      });
  }, [isSearching]);

  const handleChangeText = (text: string) => {
    !isSearching && setIsSearch(true);
    searchMention$.next(text);
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
        <SearchComp textTitle={'Search user'} onchangeText={handleChangeText} />
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
