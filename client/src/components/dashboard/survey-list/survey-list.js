import React from 'react';

export class SurveyList extends React.PureComponent {
  componentDidMount = () => {
    this.props.fetchSurveys();
  };

  render() {
    return <div>SurveyList</div>;
  }
}
