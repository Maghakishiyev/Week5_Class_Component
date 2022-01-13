import React, { Fragment, Component } from "react";
import { Redirect, Route } from "react-router-dom";
import LogInMain from "./layout/LogInMain";
import Navigation from "./layout/Navigation";
import { isLogin } from "./utils";

class Login extends Component {
  render(): React.ReactNode {
    return (
      <Route
        render={() =>
          !isLogin() ? (
            <Fragment>
              <Navigation hasButton={false} />
              <LogInMain />
            </Fragment>
          ) : (
            <Redirect to="/" />
          )
        }
      ></Route>
    );
  }
}

export default Login;
