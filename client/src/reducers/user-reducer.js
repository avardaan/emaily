import { authActionsTypes } from '../actions/auth-actions';
import { paymentsActionsTypes } from '../actions/payments-actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case authActionsTypes.FETCH_USER:
      return action.payload;
    
    case paymentsActionsTypes.HANDLE_TOKEN:
      return { ...state, ...action.payload }

    default:
      return state;
  }
}