import { signUpConstants } from './sign-up.constants';

export const SignUpActions = {
  signUp
}

function signUp(user) {
  return {
    type: signUpConstants.SIGNUP,
    payload: user
  };
}
