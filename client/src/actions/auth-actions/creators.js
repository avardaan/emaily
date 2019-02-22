import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = () => 
  /*
  redux-thunk middleware sits between returning an action from an action creator
  and sending it to the reducers. when it sees that the action created is not an object but a function,
  it automagically passes the dispatch method to the function as an argument. this gives us access to the
  dispatch function and the ability to manually decide when we want to fire off the action to the
  reducers, which in turn enables us to wait for async requests to complete, and fire the relevant action
  after.
  */
  async (dispatch) => {
    const user = await axios.get('/api/current-user');
    const action = {
      type: FETCH_USER,
      payload: user.data
    };
    dispatch(action);
    }