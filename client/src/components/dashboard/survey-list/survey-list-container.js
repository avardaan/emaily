import { SurveyList } from './survey-list';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export const SurveyListContainer = connect(
  mapStateToProps,
  actions
)(SurveyList);
