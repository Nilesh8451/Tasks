import axios from 'axios';
import {GET_DASHBOARD, GET_FEEDBACK} from './types';
import {
  baseUrl,
  dashboardEndPoint,
  feedbackEndPoint,
} from '../../shared/baseUrl';
export const getFeedback = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/${dashboardEndPoint}`, {
        headers: {
          Authorization: id,
        },
      })
      .then((res) => {
        dispatch({type: GET_FEEDBACK, data: res.data});
      })
      .catch((e) => {
        // console.log(e);
      });
  };
};

export const getDashboard = (id) => {
  return (dispatch) => {
    axios
      .get(`${baseUrl}/${feedbackEndPoint}`, {
        headers: {
          Authorization: id,
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({type: GET_DASHBOARD, data: res.data});
      })
      .catch((e) => {
        // console.log(e);
      });
  };
};
