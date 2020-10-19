import {ADD_FEEDBACK, GET_FEEDBACK} from '../action/types';

const initialState = {
  feedback: [],
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.data,
      };

    case ADD_FEEDBACK:
      return state;

    default:
      return state;
  }
};

export default feedbackReducer;
