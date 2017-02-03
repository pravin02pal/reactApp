import { authConstants } from '../action/auth.constants';

const DEFAULT_STATE = {
  user: {},
  invalidUser: false
}

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case authConstants.SIGN_IN:
      return state;
    case authConstants.INVALID_USER:
      state.user = action.payload;
      state.invalidUser = true;
      return state;
    case authConstants.SIGN_IN_SUCCESSFULL:
      state.user = action.payload;
      state.invalidUser = false;
      return state;
    default:
      return state;
  }
}

export default {
  auth: authReducer
}
