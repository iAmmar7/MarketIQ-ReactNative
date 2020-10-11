import {Alert} from 'react-native';
import axios from 'axios';

import {
  START_LOADING,
  STOP_LOADING,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from './types';

export const getAllUsers = () => async (dispatch) => {
  dispatch({type: START_LOADING});

  const response = await axios.get(`https://api.github.com/users`);

  if (response.data) {
    dispatch({type: STOP_LOADING});
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      users: response.data,
    });
  } else {
    dispatch({type: STOP_LOADING});
    dispatch({
      type: GET_ALL_USERS_FAILURE,
      error: response,
    });
  }
};

export const getUser = (searchValue) => async (dispatch) => {
  if (searchValue.trim().length < 1) {
    dispatch({
      type: GET_USER_SUCCESS,
      user: null,
    });
  } else if (/\s/.test(searchValue)) {
    Alert.alert('Waring', 'Username should not contain any whitespaces');
  } else {
    dispatch({type: START_LOADING});

    const response = await axios.get(
      `https://api.github.com/users/${searchValue}`,
    );

    if (response.data) {
      dispatch({type: STOP_LOADING});

      dispatch({
        type: GET_USER_SUCCESS,
        user: response.data,
      });
    } else {
      dispatch({type: STOP_LOADING});

      dispatch({
        type: GET_USER_FAILURE,
        error: response,
      });
    }
  }
};
