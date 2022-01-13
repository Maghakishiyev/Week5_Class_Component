import React, { Component } from "react";

import "../../index.css";
import { Link } from "react-router-dom";

class Navigation extends Component<{
  hasButton: boolean;
  logged?: boolean;
  logedInHandler?: any;
}> {
  render(): React.ReactNode {
    return (
      <nav>
        <div id="navHeader">
          <Link to="/">
            <header>
              <svg
                height="42px"
                viewBox="0 0 24 24"
                width="42px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" />
              </svg>
              <h1 id="header">Weather Forecast</h1>
            </header>
          </Link>
        </div>

        {this.props.hasButton && !this.props.logged && (
          <div id="Buttons">
            <Link to="/login">
              <button id="signUp">Sign Up</button>
            </Link>
            <Link to="/login">
              <button id="logIn">Log In</button>
            </Link>
          </div>
        )}
        {this.props.hasButton && this.props.logged && (
          <div>
            <button
              id="logOut"
              onClick={() => {
                this.props.logedInHandler(false);
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
    );
  }
}

export default Navigation;
