import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { firebase } from './firebase/firebase';
import reducers from './reducers';

import App from './components/App';
import './styles/custom.scss';
import 'normalize.css/normalize.css';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in, user -> ', user);
    store.dispatch({
      type: 'LOGIN',
      user_id: user.uid,
      user_name: user.displayName
    });
  } else {
    console.log('logged out');
  }
});
