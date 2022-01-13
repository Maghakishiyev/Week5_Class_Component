import React, { Component } from "react";
import "../../index.css";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import weather from "../../Icons/clouds-summer-weather-5k-1b-1920x1080.jpg";

interface loggedState {
  isLogged: boolean;
}

type props = RouteComponentProps;

class LandingMain extends Component<props, loggedState> {
  constructor(props: any) {
    super(props);
    this.state = { isLogged: false };
  }

  componentDidMount() {
    if (localStorage.getItem("isLoggedIn") === "1") {
      this.setState({
        isLogged: true,
      });
    }
  }

  descButtonClickHandler = () => {
    if (this.state.isLogged) {
      this.props.history.push("/forecast");
    }
  };

  render(): React.ReactNode {
    return (
      <main id="landingMain">
        <div id="description">
          <header>Check The Weather Across The World Now</header>
          <div id="cloud">
            <img src={weather} alt="weather" />
          </div>
          <button
            id="descButton"
            className={this.state.isLogged ? "Registered" : "notRegistered"}
            onClick={this.descButtonClickHandler.bind(this)}
          >
            See The Forecast
          </button>
          <div id="descParagraph">
            <p>
              This website application was created using React. You can check
              world weather forecasts by clicking on the button above. But first
              you have to log in. Otherwise it will not work.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(LandingMain);
