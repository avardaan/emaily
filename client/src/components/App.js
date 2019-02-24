import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import Landing from './landing';
import { authActions } from '../actions/auth-actions/index'
import 'materialize-css/dist/css/materialize.min.css';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

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