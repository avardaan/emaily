// field component for survey to be used with redux-form
import React from 'react';

export const SurveyField = ({ input, label }) => {
  console.log(input)
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
}