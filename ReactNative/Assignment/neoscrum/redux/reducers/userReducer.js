import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  SIGNOUT,
  RESTORE_LOGINDATA,
} from '../action/types';
import Toast from 'react-native-simple-toast';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {},
        isLoading: false,
        error: action.data,
      };

    case RESTORE_LOGINDATA:
      console.log('restore inside reducer', action.data);
      return {
        ...state,
        user: action.data,
        isLoading: false,
        error: null,
      };

    case SIGNOUT:
      Toast.show('Successfully Logout', Toast.LONG);
      return {
        ...state,
        user: {},
        isLoading: false,
        errro: null,
      };

    default:
      return state;
  }
};

export default userReducer;
