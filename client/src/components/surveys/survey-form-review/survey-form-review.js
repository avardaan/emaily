import React from 'react';
import { FIELDS } from '../form-fields';

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

export const SurveyFormReview = (props) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {renderFields(FIELDS, props.formValues)}
      <button
        className="yellow darken-3 btn-flat"
        onClick={props.onCancel}
      >
        Back
      </button>
    </div>
  )
}