import React, {useEffect} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from './ListItem';
import Loader from './Loader';
import {getAllUsers} from '../store/actions/users';

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const {users, user, loading} = useSelector((state) => state.users);
  console.log('User', loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <FlatList
      style={styles.listContainer}
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <ListItem
          imageURL={item.avatar_url}
          username={item.login}
          // onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    width: '100%',
  },
});

export default UsersList;
