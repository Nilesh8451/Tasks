import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESTORE_LOGINDATA,
} from './types';
import Toast from 'react-native-simple-toast';
import {baseUrl, loginEndPoint} from '../../shared/baseUrl';
import {AsyncStorage} from 'react-native';

const storeData = async (user) => {
  try {
    await AsyncStorage.setItem('userInfo', JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const restoreLoginData = (user) => {
  return (dispatch) => {
    dispatch({type: RESTORE_LOGINDATA, data: user});
  };
};

export const login = (user) => {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    axios
      .post(`${baseUrl}/${loginEndPoint}`, {
        user_email: user.email,
        user_pass: user.password,
      })
      .then((res) => {
        // console.log('Success of updating', res.data);

        console.log('MYDATA', res.data);
        storeData(res.data);

        dispatch({type: LOGIN_SUCCESS, data: res.data});
        Toast.show('Successfully Login', Toast.LONG);
      })
      .catch((e) => {
        // console.log('Failure of data', e);
        dispatch({type: LOGIN_FAILURE, data: e});
      });
  };
};
