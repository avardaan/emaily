import React from 'react';

export class SurveyList extends React.PureComponent {
  componentDidMount = () => {
    this.props.fetchSurveys();
  };

  renderSurveys() {
    return this.props.surveys.map((survey) => (
      <div className='card darken-1' key={survey._id}>
        <div className='card-content'>
          <span className='card-title'>{survey.title}</span>
          <p>{survey.body}</p>
          <p className='right'>
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className='card-action'>
          <p>Yes: {survey.responses.yes}</p>
          <p>No: {survey.responses.no}</p>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}
