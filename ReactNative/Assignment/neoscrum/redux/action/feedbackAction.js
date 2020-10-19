import axios from 'axios';
import {ADD_FEEDBACK, GET_FEEDBACK} from './types';

export const addFeedback = (feedback) => {
  return {
    type: ADD_FEEDBACK,
    data: feedback,
  };
};

export const getFeedback = (id) => {
  return (dispatch) => {
    axios
      .get('')
      .then((res) => {
        console.log(res);
        dispatch({type: GET_FEEDBACK, data: res});
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
