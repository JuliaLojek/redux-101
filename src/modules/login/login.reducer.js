import { LOGIN_ACTION_TYPES } from './login.actions';

const INITIAL_STATE = {
  isLoggedIn: false,
  email: "",
  isLoading: false,
  isError: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.LOG_IN:
      return state = {
        ...state,
        isLoggedIn: true,
        email: action.value,
        isLoading: false,
        isError: false
      };
    case LOGIN_ACTION_TYPES.LOG_OUT:
      return state = {
        ...state,
        isLoggedIn: false,
        email: "",
        isLoading: false,
        isError: false
      };
    case LOGIN_ACTION_TYPES.SET_ERROR_LOGIN:
      return state = {
        ...state,
        isLoggedIn: false,
        email: "",
        isLoading: false,
        isError: true
      };
    case LOGIN_ACTION_TYPES.SET_LOADING_LOGIN:
      return state = {
        ...state,
        isLoggedIn: false,
        email: "",
        isLoading: true,
        isError: false
      };
    default:
      return state;
  }
}
