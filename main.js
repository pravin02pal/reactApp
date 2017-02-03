import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';
import { authReducer } from './src/sign-in/reducer/auth.reducer';
import { signUpReducer } from './src/sign-up/reducer/sign-up.reducer';
import { signInMiddleware } from './src/sign-in/middleware/sign-in.middleware';

const eSchoolApp = combineReducers({
   authReducer,
   signUpReducer
});

let store = createStore(eSchoolApp, applyMiddleware(signInMiddleware));
let rootElement = document.getElementById('app');

ReactDOM.render(
   <Provider store = {store}>
      <App />
   </Provider>,
   rootElement
);
