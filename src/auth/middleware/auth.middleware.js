import { authConstants } from '../action/auth.constants';

export const authMiddleware = store => next => action => {
  switch (action.type) {
    case authConstants.SIGN_IN:
      next(action);
      return next(signInUser(store.getState().signUpReducer.users[action.payload.email], action));
    default:
      return next(action);
  }
  
  function signInUser(user, action) {
    if (user && user.password == action.payload.password) {
      return {type: authConstants.SIGN_IN_SUCCESSFULL, payload: action.payload};
    } else {
      return {type: authConstants.INVALID_USER, payload: action.payload};
    }
  }
}
