import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';
import { authReducer } from './src/login/reducer/auth.reducer';
import { signUpReducer } from './src/sign-up/reducer/sign-up.reducer';

const eSchoolApp = combineReducers({
   authReducer,
   signUpReducer
})

let store = createStore(eSchoolApp)
let rootElement = document.getElementById('app')

ReactDOM.render(
   <Provider store = {store}>
      <App />
   </Provider>,
   rootElement
);
