import { authConstants } from '../action/auth.constants';

const DEFAULT_STATE = {
  user: { login: '', password: '' },
  invalidUser: false
}

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case authConstants.LOGIN:
      return state;
    case authConstants.INVALID_USER:
      state.invalidUser = true;
      return state;
    case authConstants.LOGIN_SUCCESS:
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
