import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {getUser} from '../store/actions/users';

const searchField = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const valueChange = (text) => {
    setValue(text);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getUser(value));
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [value]);

  return (
    <TextInput
      placeholder="Search username..."
      style={styles.inputField}
      value={value}
      onChangeText={valueChange}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: 'ghostwhite',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});

export default searchField;
