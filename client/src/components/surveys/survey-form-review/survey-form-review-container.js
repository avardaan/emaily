import { SurveyFormReview } from './survey-form-review';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    formValues: state.form.surveyForm.values
  };
}

export const SurveyFormReviewContainer = connect(mapStateToProps)(SurveyFormReview);