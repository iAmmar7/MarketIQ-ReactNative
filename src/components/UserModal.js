import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const UserModal = ({visible, onModalClose, data}) => {
  const openLink = () => {
    Linking.canOpenURL(data.html_url).then((supported) => {
      if (supported) {
        Linking.openURL(data.html_url);
      }
    });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onModalClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              resizeMode="cover"
              source={{uri: data.avatar_url}}
              style={styles.userImage}
            />
            <Text style={styles.modalText}>{data.login}</Text>
            <TouchableOpacity style={styles.modalText} onPress={openLink}>
              <Text style={{color: 'blue'}}>{data.html_url}</Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: 'red'}}
              onPress={onModalClose}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  userImage: {
    marginRight: 8,
    height: 50,
    width: 50,
  },
});

export default UserModal;
