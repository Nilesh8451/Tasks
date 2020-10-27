import {SIGNOUT} from './types';

import {AsyncStorage} from 'react-native';

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('userInfo');
    console.log('Removed Data');
  } catch (e) {
    console.log(e);
  }
};

export const signout = () => {
  removeData();
  return {
    type: SIGNOUT,
  };
};
