import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import surveysReducer from './surveys-reducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  user: userReducer,
  surveys: surveysReducer,
  form: reduxForm
});
