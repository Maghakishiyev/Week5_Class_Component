import React, { Fragment, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import ForecastMain from "./layout/ForecastMain";
import Navigation from "./layout/Navigation";
import { isLogin } from "./utils/index";

import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

type props = RouteComponentProps;
interface loggedState {
  isLogged: boolean;
}

class Forecast extends Component<props, loggedState> {
  constructor(props: props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isLoggedIn") === "1") {
      this.setState({
        isLogged: true,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <Route
        render={() =>
          isLogin() ? (
            <Fragment>
              <Navigation
                hasButton={true}
                logged={this.state.isLogged}
                logedInHandler={(state: boolean) => {
                  this.setState({ isLogged: state });
                  localStorage.removeItem("isLoggedIn");
                  this.props.history.replace("/");
                }}
              />
              <ForecastMain />
            </Fragment>
          ) : (
            <Redirect to="/" />
          )
        }
      ></Route>
    );
  }
}

export default withRouter(Forecast);
