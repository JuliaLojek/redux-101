
export const LOGIN_ACTION_TYPES = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  FETCH_USER_DATA: "FETCH_USER_DATA",
  SET_LOADING_LOGIN: "SET_LOADING_LOGIN",
  SET_ERROR_LOGIN: "SET_ERROR_LOGIN"
};

export const LOG_IN = (email) => {
  return {
    type: LOGIN_ACTION_TYPES.LOG_IN,
    value: email,
  };
};

export const LOG_OUT = () => {
  return {
    type: LOGIN_ACTION_TYPES.LOG_OUT,
  };
};

export const FETCH_USER_DATA = (email, password) => {
  return dispatch => {
    const body = { email: email, password: password };
    dispatch(SET_LOADING_LOGIN());
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).includes("error")) {
          dispatch(SET_ERROR_LOGIN());
        } else {
          dispatch(LOG_IN(email));
        }
      })
      .catch(error => dispatch(SET_ERROR_LOGIN()))
  };
};

export const SET_LOADING_LOGIN = () => {
  return {
    type: LOGIN_ACTION_TYPES.SET_LOADING_LOGIN
  }
};

export const SET_ERROR_LOGIN = () => {
  return {
    type: LOGIN_ACTION_TYPES.SET_ERROR_LOGIN
  }
};
