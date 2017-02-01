import { signUpConstants } from '../action/sign-up.constants';

const DEFAULT_STATE = {
  users: []
}

export const signUpReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case signUpConstants.SIGNUP:
      state.users.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default {
  auth: signUpReducer
}
