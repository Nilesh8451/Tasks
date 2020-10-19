import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  SIGNOUT,
} from '../action/types';

const initialState = {
  user: {
    user_id: 168,
    user_name: 'Shubham',
    user_email: 'sgshubham04@gmail.com',
    user_pass: '$2a$10$zNA5ZK/uJE6980F2CK.C0e4d27O1uG.G8eaqVG6Etb1wz6LrfOMsK',
    user_image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
  },
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
    case SIGNOUT:
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
