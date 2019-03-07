import React from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyFormComponent extends React.Component {

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <Field
          type="text"
          name="surveyTitle"
          component="input"
        />
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const reduxFormConfig = {
  form: 'surveyForm'
};

export const SurveyForm = reduxForm(reduxFormConfig)(SurveyFormComponent);
