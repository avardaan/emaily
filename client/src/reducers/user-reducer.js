import { FETCH_SURVEYS, FETCH_USER, HANDLE_TOKEN } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;

    case HANDLE_TOKEN:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
