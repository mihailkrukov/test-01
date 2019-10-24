import { Action } from "redux";
import { ActionType } from "../actions/types";
import { IAlertReduxState } from "./interface";

const initialState: IAlertReduxState = {
  type: undefined,
  message: undefined,
};

export const alert = (state = initialState, action: Action & { message?: string }) => {
  switch (action.type) {
    case ActionType.ALERT_SUCCESS: {
      const { message } = action as { message: string };
      return { ...state, type: "", message };
    }
    case ActionType.ALERT_ERROR: {
      const { message } = action as { message: string };
      return { ...state, type: "", message };
    }
    case ActionType.ALERT_CLEAR:
      return { ...state, type: undefined, message: undefined };
    default:
      return state
  }
}