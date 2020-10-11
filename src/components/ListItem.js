import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = (props) => (
  <TouchableOpacity onPress={(item) => props.onItemPressed(props.userObj)}>
    <View style={styles.listItem}>
      <Image
        resizeMode="cover"
        source={{uri: props.imageURL}}
        style={styles.userImage}
      />
      <Text>{props.username}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
});

export default ListItem;
