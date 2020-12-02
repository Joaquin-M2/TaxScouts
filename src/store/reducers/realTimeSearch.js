import * as actionTypes from '../actions/actionTypes';
import utilityObject from '../shared/utility';

const initialState = {
  userInput: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_INPUT:
      return utilityObject(state, { userInput: action.userInput });
    default:
      return state;
  }
};

export default reducer;
