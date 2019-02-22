import { FETCH_USER } from "../actions/auth-actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER:
      return action.payload;

    default:
      return state;
  }
}