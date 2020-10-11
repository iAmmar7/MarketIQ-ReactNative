import {
  START_LOADING,
  STOP_LOADING,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, {type, users, user, error}) => {
  switch (type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        error,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default reducer;
