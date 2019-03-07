import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import Landing from './landing';
import Dashboard from './dashboard';
import SurveyNew from './surveys';
import { authActions } from '../actions/auth-actions/index'
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
    )
  }
}

export default connect(null, authActions)(App);