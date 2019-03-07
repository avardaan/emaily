import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SurveyField } from './survey-field';
import { Link } from 'react-router-dom';

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
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
        </form>
      </div>
    );
  }
}

const reduxFormConfig = {
  form: 'surveyForm'
};

export const SurveyForm = reduxForm(reduxFormConfig)(SurveyFormComponent);
