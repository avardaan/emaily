import { SurveyFormReview } from './survey-form-review';
import { connect } from 'react-redux';
import { formActions } from '../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    formValues: state.form.surveyForm.values
  };
}

export const SurveyFormReviewContainer = connect(mapStateToProps, formActions)(SurveyFormReview);