import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SurveyField } from './survey-field';
import { Link } from 'react-router-dom';
import { checkInvalidEmails } from '../../utils/input-validation';

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

  // bind handleSubmit
  handleSubmit = this.handleSubmit.bind(this);

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
    this.props.onSurveySubmit();
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

const validationHelper = (values) => {
  const errors = {};
  // if data invalid, errors.propertyName = errorMessage
  // and field with name === propertyName gets error: errorMessage
  errors.emails = values.emails ? checkInvalidEmails(values.emails) : null;

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value.';
    }
  });
  return errors;
};

const reduxFormConfig = {
  validate: validationHelper,
  destroyOnUnmount: false,
  form: 'surveyForm'
};

export const SurveyForm = reduxForm(reduxFormConfig)(SurveyFormComponent);
