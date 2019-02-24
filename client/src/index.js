import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

import App from './components/app';

const store = () => {
  // enable redux devtools if not in prod env
  const middleware = [reduxThunk];
  const applyMiddlewareToStore = process.env.NODE_ENV === 'production' ?
    applyMiddleware(...middleware) :
    composeWithDevTools(applyMiddleware(...middleware));
  return createStore(reducers, {}, applyMiddlewareToStore);
}

const AppWithProvider = () => {
  return (
    <Provider store={store()}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <AppWithProvider />,
  document.getElementById('root')
);