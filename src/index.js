import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';

import allReducers from './store/reducers/allReducers';

import './index.scss';

const store = createStore(allReducers, compose(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore
  })),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, {
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    userProfile: 'users'
  })
));

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
