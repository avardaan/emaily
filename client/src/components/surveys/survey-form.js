import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SurveyField } from './survey-field';

const FIELDS = [
  {
    name: 'title',
    label: 'Survey Title'
  },
  {
    name: 'subject',
    label: 'Subject Line'
  },
  {
    name: 'body',
    label: 'Email Body'
  },
  {
    name: 'emails',
    label: 'Recipient List'
  },
]

class SurveyFormComponent extends React.Component {

  renderFields() {
    return FIELDS.map((field) => {
      return (
        <Field
          key={field.name}
          type="text"
          component={SurveyField}
          {...field}
        />
      );
    })
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        {this.renderFields()}
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
