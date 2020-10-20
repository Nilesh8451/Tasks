import {ADD_FEEDBACK, GET_DASHBOARD, GET_FEEDBACK} from '../action/types';

const initialState = {
  feedback: [
    {
      sender_id: 168,
      receiver_id: 90,
      receiver_name: 'Shubham Soni',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
      flag: false,
    },
    {
      sender_id: 168,
      receiver_id: 92,
      receiver_name: 'Shubham Gupta',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
      flag: false,
    },
    {
      sender_id: 168,
      receiver_id: 93,
      receiver_name: 'Akash Yadav',
      image_path:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
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
      feedback_data: 'Very fast in writting efficient code.',
      posting_date: '2019-11-02T18:30:30.000Z',
    },
    {
      receiver_id: 168,
      feedback_data: 'Good Team Player',
      posting_date: '2019-10-30T18:30:30.000Z',
    },
    {
      receiver_id: 168,
      feedback_data: 'Very Nice',
      posting_date: '2019-10-29T18:30:30.000Z',
    },
    {
      receiver_id: 168,
      feedback_data: 'Very Great',
      posting_date: '2019-09-29T18:30:30.000Z',
    },
  ],
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.data,
      };

    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: action.data,
      };

    case ADD_FEEDBACK:
      return state;

    default:
      return state;
  }
};

export default feedbackReducer;
