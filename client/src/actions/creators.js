import { FETCH_USER, FETCH_SURVEYS, HANDLE_TOKEN } from './types';
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
  };

export const submitSurvey = (formValues, history) => async (dispatch) => {
  const response = await axios.post('/api/surveys', formValues);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: HANDLE_TOKEN, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
