import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducers/userReducer';
import feedbackReducer from './reducers/feedbackReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer: userReducer,
  feedbackReducer: feedbackReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
