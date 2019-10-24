import axios, { AxiosResponse } from "axios";
import { IAuthContext } from "./context";
import { signInRequest, signInSuccess, signInFailure } from "../../actions/creators";
import store from "../../store";
import { IAuthResponse } from "./interface";

export default class AuthService implements IAuthContext {
  private readonly routeSignIn = "http://localhost:4000/signin";
  private readonly routeSignUp = "http://localhost:4000/signup";

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  public async signIn(login: string, password: string): Promise<void> {
    store.dispatch(signInRequest());
    try {
      const resp: AxiosResponse<IAuthResponse> = await axios.post(this.routeSignIn, { login, password });
      const { data: { token } } = resp.data;
      localStorage.setItem("token", token);
      store.dispatch(signInSuccess(token));
    } catch (error) {
      console.log(error, error.response);
      store.dispatch(signInFailure());
    }
  }
}
