import { paymentsActionsTypes } from "../actions/payment-actions";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case paymentsActionsTypes.HANDLE_TOKEN:
      return { ...state, credits: action.payload };

    default:
      return state;
  }
}