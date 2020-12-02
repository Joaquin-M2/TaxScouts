import * as actionTypes from './actionTypes';

export const updateUserInput = userInput => {
  return {
    type: actionTypes.USER_INPUT,
    userInput: userInput,
  };
};
