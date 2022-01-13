import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";

import { RouteComponentProps } from "react-router";
import "../../index.css";

interface States {
  enteredEmail: string;
  enteredPassword: string;
  isValid: boolean;
  validMessage: boolean;
}

type props = RouteComponentProps;

class LogInMain extends Component<props, States> {
  constructor(props: props) {
    super(props);
    this.state = {
      enteredEmail: "",
      enteredPassword: "",
      isValid: false,
      validMessage: true,
    };
  }

  emailInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ enteredEmail: event.target.value });
  };

  passwordInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ enteredPassword: event.target.value });
  };

  validChangeHandler = () => {
    this.setState({
      isValid:
        this.state.enteredEmail.trim() !== "" &&
        this.state.enteredPassword.trim().length > 0 &&
        this.state.enteredEmail.trim().includes("@"),
    });
  };

  SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (this.state.isValid) {
      localStorage.setItem("isLoggedIn", "1");
      this.props.history.replace("/");
    } else {
      this.setState({ validMessage: this.state.isValid });
    }
  };

  render(): React.ReactNode {
    return (
      <Fragment>
        <main id="logInMain">
          <form id="logInForm" onSubmit={this.SubmitHandler.bind(this)}>
            <div id="wrapper">
              <h1 id="logInH1">Log In</h1>
              <div>
                <div id="emailLabel">
                  <label htmlFor="eMail">Email</label>
                </div>

                <div id="emailInput">
                  <input
                    type="email"
                    id="eMail"
                    placeholder="Enter your E-mail address"
                    onChange={this.emailInputChangeHandler.bind(this)}
                  />
                </div>
              </div>

              <div>
                <div id="passwordLabel">
                  <label htmlFor="password">Password</label>
                </div>

                <div id="passwordInput">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={this.passwordInputChangeHandler.bind(this)}
                  />
                </div>
              </div>

              {!this.state.validMessage && (
                <p id="errorMessage">
                  Password or Email address can not be empty
                </p>
              )}

              <div>
                <button
                  id="buttonLog"
                  onClick={this.validChangeHandler.bind(this)}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </main>
      </Fragment>
    );
  }
}

export default withRouter(LogInMain);
