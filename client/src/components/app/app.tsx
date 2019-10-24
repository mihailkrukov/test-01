import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import './app.css';

// Components
import Home from '../home/home';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
import PrivateRoute from '../private-route/private-route';
import GuestRoute from '../guest-route/guest-route';
import withAuthService, { IWithAuthServiceProps } from '../../hoc/withAuthService';

const history = createBrowserHistory();

const App: React.FC<IWithAuthServiceProps> = (props: IWithAuthServiceProps) => {
  const isAuthenticated = props.authService.isAuthenticated();
  console.log("App RENDER", isAuthenticated);
  return (
    <React.Fragment>
      <CssBaseline />
      <Router history={history}>
        <PrivateRoute exact path="/" component={Home} />
        <GuestRoute path="/signin" component={SignIn} />
        <GuestRoute path="/signup" component={SignUp} />
      </Router>
    </React.Fragment>
  );
}

export default withAuthService(App);
