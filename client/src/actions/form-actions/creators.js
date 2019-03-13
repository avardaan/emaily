import { authActionsTypes } from '../auth-actions';
import axios from 'axios';

export const submitSurvey = (formValues, history) =>
  async (dispatch) => {
    const response = await axios.post('/api/surveys', formValues);
    history.push('/surveys');
    dispatch({
      type: authActionsTypes.FETCH_USER,
      payload: response.data
    });
  }