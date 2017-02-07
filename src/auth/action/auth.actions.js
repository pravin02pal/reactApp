import { authConstants } from './auth.constants';

export const authActions = {
  signIn,
  signOut
}

function signIn(user) {
  return {
    type: authConstants.SIGN_IN,
    payload: user
  };
}

function signOut(user) {
  return {
    type: authConstants.SIGN_OUT
  };
}
