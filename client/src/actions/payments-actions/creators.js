import { HANDLE_TOKEN } from './types';
import axios from 'axios';

export const handleToken = (token) =>
  async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({
      type: HANDLE_TOKEN,
      payload: res.data
    });
}