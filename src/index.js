import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { firebase } from './firebase/firebase';
import reducers from './reducers';

import App from './components/App';
import './styles/custom.scss';
import { history } from './routes/AppRouter';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

let hasRendered = false;
const renderApp = () => {
  return ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  // hasRendered = true;
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in');
    store.dispatch({
      type: 'LOGIN',
      user_id: user.uid,
      user_name: user.displayName
    });
    renderApp();
  } else {
    console.log('logged out');
    renderApp();
  }
});
