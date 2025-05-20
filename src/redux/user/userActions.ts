import { Dispatch } from "redux";
import { login } from "../../features/auth/auth.service";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../constants/actionRedux";

export const loginDispatch = (data: { username: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await login(data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error: any) {
      dispatch({ type: LOGIN_FAILURE, payload: "loginfail" });
    }
  };
};

export const logoutDispatch = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch({ type: LOGOUT, payload: null });
    } catch (error: any) {
      console.log(error)
    }
  };
}
