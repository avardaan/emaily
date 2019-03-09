// field component for survey to be used with redux-form
import React from 'react';

export const SurveyField = ({ input, label, meta: { error, touched } }) => {
  console.log(input)
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
      </div>
    </div>
  );
}