import { ActionType } from "./types";

export const signInRequest = () => {
  return {
    type: ActionType.USERS_SIGNIN_REQUEST,
  }
};

export const signInSuccess = (payload: string) => {
  return {
    type: ActionType.USERS_SIGNIN_SUCCESS,
    payload,
  }
};

export const signInFailure = () => {
  return {
    type: ActionType.USERS_SIGNIN_FAILURE,
  }
};
