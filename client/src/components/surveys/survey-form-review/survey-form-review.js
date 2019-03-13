import React from 'react';
import { FIELDS } from '../form-fields';
import { withRouter } from 'react-router-dom';

// function will take in FIELDS array to get label and
// formValues from redux to get value submitted by user
const renderFields = (fields, formValues) => {
  return fields.map((field) => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>
          {formValues[field.name]}
        </div>
      </div>
    )
  })
}

export const SurveyFormReviewWithoutRouter = (props) => {

  const submitSurvey = () => {
    props.submitSurvey(props.formValues, props.history);
  };

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {renderFields(FIELDS, props.formValues)}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={props.onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat white-text right"
        onClick={submitSurvey}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
};

export const SurveyFormReview = withRouter(SurveyFormReviewWithoutRouter);