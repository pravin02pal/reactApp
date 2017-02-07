import { signUpConstants } from '../action/sign-up.constants';

const DEFAULT_STATE = {
  users: {'admin@yopmail.com': {name: 'Admin', email: 'admin@yopmail.com', password: '123456'} }
}

export const signUpReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case signUpConstants.SIGNUP:
      state.users[action.payload.email] = action.payload;
      return state;
    default:
      return state;
  }
}

export default {
  auth: signUpReducer
}
