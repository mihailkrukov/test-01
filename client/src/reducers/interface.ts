
export interface IAuthenticationReduxState {
  loggedIn: boolean,
  loggingIn: boolean,
  token?: string,
}

export interface IRegistrationReduxState {
  registering: boolean,
}

export interface IAlertReduxState {
  type?: string,
  message?: string,
}

export interface IRootReduxState {
  authentication: IAuthenticationReduxState,
  registration: IRegistrationReduxState,
  alert: IAlertReduxState,
}
