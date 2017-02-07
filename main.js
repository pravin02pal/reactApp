import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';
import { authReducer } from './src/auth/reducer/auth.reducer';
import { signUpReducer } from './src/sign-up/reducer/sign-up.reducer';
import { authMiddleware } from './src/auth/middleware/auth.middleware';

const eSchoolApp = combineReducers({
   authReducer,
   signUpReducer
});

let store = createStore(eSchoolApp, applyMiddleware(authMiddleware));
let rootElement = document.getElementById('app');

ReactDOM.render(
   <Provider store = {store}>
      <App />
   </Provider>,
   rootElement
);
