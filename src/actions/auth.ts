import AuthService from "../providers/AuthProvider";

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  

  
  export const login = (username: string, password: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const logout = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };
  