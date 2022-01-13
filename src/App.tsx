import React, { Fragment, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Forecast from "./Components/Forecast";
import Landing from "./Components/Landing";
import Login from "./Components/Login";

import "./index.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/forecast">
            <Forecast />
          </Route>

          <Route path="/">
            <Landing />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
