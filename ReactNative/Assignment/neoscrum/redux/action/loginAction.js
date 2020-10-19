import axios from 'axios';
import {LOGIN, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from './types';

export const login = (user) => {
  return (dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    axios
      .post('http://180.149.241.208:3000/login', {
        user_email: user.email,
        user_pass: user.password,
      })
      .then((res) => {
        console.log(res);
        dispatch({type: LOGIN_SUCCESS, data: res});
      })
      .catch((e) => {
        console.log(e);
        dispatch({type: LOGIN_FAILURE, data: e});
      });
  };
};
