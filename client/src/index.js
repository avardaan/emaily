import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/app';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const AppWithProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <AppWithProvider />,
  document.getElementById('root')
);