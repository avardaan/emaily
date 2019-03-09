// SurveyNew shows SurveyForm and SurveyFormReview
import React from 'react';
import { SurveyForm } from './survey-form';
import SurveyFormReview from './survey-form-review';
export class SurveyNew extends React.Component {
  
  state = {
    showFormReview: false
  }

  renderContent() {
    const navigateToFormReview = () => this.setState({ showFormReview: true });
    const navigateBackToForm = () => this.setState({ showFormReview: false });
    return this.state.showFormReview ?
      <SurveyFormReview onCancel={navigateBackToForm}/> :
      <SurveyForm onSurveySubmit={navigateToFormReview} />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

