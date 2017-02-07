import { authConstants } from '../action/auth.constants';

const DEFAULT_STATE = {
  user: {},
  invalidUser: false,
  isAdmin: false,
  isLoggedIn: false
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
      state.isAdmin = false;
      state.isLoggedIn = true;
      return state;
    case authConstants.ADMIN_SIGNED_IN:
      state.user = action.payload;
      state.invalidUser = false;
      state.isAdmin = true;
      state.isLoggedIn = true;
      return state;
    case authConstants.SIGN_OUT:
      state.user = {};
      state.invalidUser = false;
      state.isAdmin = false;
      state.isLoggedIn = false;
      return state;
    default:
      return state;
  }
}

export default {
  auth: authReducer
}
