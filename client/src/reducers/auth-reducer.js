import { authActionsTypes } from "../actions/auth-actions";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case authActionsTypes.FETCH_USER:
      return action.payload;

    default:
      return state;
  }
}