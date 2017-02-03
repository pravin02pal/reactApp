import { authConstants } from './auth.constants';

export const AuthActions = {
  login
}

function login(user) {
  return {
    type: authConstants.LOGIN,
    payload: user
  };
}
