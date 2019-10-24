import React from "react";
import { connect } from "react-redux";
import { IRootReduxState } from '../../reducers/interface';
import { Redirect, withRouter } from 'react-router-dom'

// Containers
import SignInContainer from "../../containers/sign-in/sign-in";
import withAuthService, { IWithAuthServiceProps } from "../../hoc/withAuthService";
import { RouteComponentProps } from "react-router";

interface ISignInProps {
  loggingIn: boolean;
  loggedIn: boolean;
}

export class SignIn extends React.Component<ISignInProps & RouteComponentProps & IWithAuthServiceProps> {

  state = {
    login: "",
    password: "",
  };

  onFieldChange = (name: string, value: string) => {
    this.setState({ [name]: value });
  }
  onSubmit = async () => {
    const { login, password } = this.state;
    await this.props.authService.signIn(login, password);
  }

  componentDidUpdate() {
    if (this.props.loggedIn === true) {
      this.props.history.push("/");
      console.log("SHOULD BE REDIRECT");
    }
  }

  render() {
    const { loggingIn, loggedIn } = this.props;
    console.log("SIGN IN RENDER", loggingIn, loggedIn);
    if (loggedIn) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    return <SignInContainer loggingIn={loggingIn} onSubmit={this.onSubmit} onFieldChange={this.onFieldChange} />;
  }
}

const mapStateToProps = (state: IRootReduxState) => ({ 
  loggingIn: state.authentication.loggingIn,
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps)(withAuthService(withRouter(SignIn)));
