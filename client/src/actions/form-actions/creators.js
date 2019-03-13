import { authActionsTypes } from '../auth-actions';
import axios from 'axios';

export const submitSurvey = (values) =>
  async (dispatch) => {
    const response = await axios.post('/api/surveys', values);
    dispatch({
      type: authActionsTypes.FETCH_USER,
      payload: response.data
    });
  }