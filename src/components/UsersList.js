import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListItem from './ListItem';
import Loader from './Loader';
import UserModal from './UserModal';
import {getAllUsers} from '../store/actions/users';

const UsersList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const {users, user, loading} = useSelector((state) => state.users);

  const itemPressed = (selectedUser) => {
    setSelectedUser(selectedUser);
    setShowModal(true);
  };

  if (loading) {
    return <Loader />;
  }

  if (showModal) {
    return (
      <UserModal
        visible={showModal}
        data={selectedUser}
        onModalClose={() => setShowModal(false)}
      />
    );
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
          userObj={item}
          onItemPressed={itemPressed}
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
