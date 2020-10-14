import {ADD_FOOD, DELETE_FOOD} from './types';

export const addFood = (food) => {
  return {
    type: ADD_FOOD,
    data: food,
  };
};

export const deleteFood = (key) => {
  return {
    type: DELETE_FOOD,
    key: key,
  };
};
