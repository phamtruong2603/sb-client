import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../../constants/actionRedux";
import { Action } from "../type";

interface UserState {
  user: any | null;
  loading: boolean;
  error: any | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
