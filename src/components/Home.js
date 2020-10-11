import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import UsersList from './UsersList';
import {useSelector} from 'react-redux';

const Home = () => {
  const {user} = useSelector((state) => state.users);

  const openLink = () => {
    Linking.canOpenURL(user.html_url).then((supported) => {
      if (supported) {
        Linking.openURL(user.html_url);
      }
    });
  };

  if (user) {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          source={{uri: user.avatar_url}}
          style={styles.userImage}
        />
        <Text>{user.login}</Text>
        <TouchableOpacity onPress={openLink}>
          <Text style={{color: 'blue'}}>{user.html_url}</Text>
        </TouchableOpacity>
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
