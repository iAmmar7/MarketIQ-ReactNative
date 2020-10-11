import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import UsersList from './UsersList';
import {useSelector} from 'react-redux';

const Home = () => {
  const {user} = useSelector((state) => state.users);
  console.log(user);

  if (user) {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          source={{uri: user.avatar_url}}
          style={styles.userImage}
        />
        <Text>{user.login}</Text>
        <Text>{user.url}</Text>
      </View>
    );
  }

  return <UsersList />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    marginRight: 8,
    height: 70,
    width: 70,
  },
});

export default Home;
