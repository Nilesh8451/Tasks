import {SIGNOUT} from './types';

export const signout = (user) => {
  return {
    type: SIGNOUT,
  };
};
