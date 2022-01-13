import React, { Fragment, Component } from "react";
import LandingMain from "./layout/LandingMain";
import Navigation from "./layout/Navigation";

interface loggedState {
  isLogged: boolean;
}

class Landing extends Component<{}, loggedState> {
  constructor(props: {}) {
    super(props);
    this.state = { isLogged: false };
  }

  render(): React.ReactNode {
    return (
      <Fragment>
        <Navigation
          hasButton={true}
          logged={localStorage.getItem("isLoggedIn") === "1"}
          logedInHandler={(state: boolean) => {
            this.setState({ isLogged: state });
            localStorage.removeItem("isLoggedIn");
          }}
        />
        <LandingMain />
      </Fragment>
    );
  }
}

export default Landing;
