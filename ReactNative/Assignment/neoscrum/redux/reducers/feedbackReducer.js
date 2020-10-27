import {GET_DASHBOARD, GET_FEEDBACK} from '../action/types';

const initialState = {
  feedback: [
    {
      sender_id: 168,
      receiver_id: 90,
      receiver_name: 'Nilesh Chavan',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
      flag: false,
    },
    {
      sender_id: 168,
      receiver_id: 92,
      receiver_name: 'Omkar Pise',
      image_path:
        'https://www.mykhel.com/img/2018/10/viratkohli-1540363340.jpg',
      flag: false,
    },
    {
      sender_id: 168,
      receiver_id: 94,
      receiver_name: 'Deepak Prasad',
      image_path: '',
      flag: false,
    },
  ],
  dashboard: [
    {
      receiver_id: 168,
      feedback_data: 'Unbelievable Hitter',
      posting_date: '2020-10-19T18:30:30.000Z',
    },
    {
      receiver_id: 168,
      feedback_data:
        'Great Coding Skills, along with ability to write reusable code in proper format.Looks nice when we see such beautiful code.',
      posting_date: '2020-04-21T18:30:30.000Z',
    },
  ],
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.data.data,
      };

    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: action.data.feedback,
      };

    default:
      return state;
  }
};

export default feedbackReducer;
