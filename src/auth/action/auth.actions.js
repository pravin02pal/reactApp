import { authConstants } from './auth.constants';

export const authActions = {
  signIn
}

function signIn(user) {
  return {
    type: authConstants.SIGN_IN,
    payload: user
  };
}
