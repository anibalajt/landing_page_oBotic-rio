import React, { Component, Fragment } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
// import { Helmet } from "react-helmet";

import HomePage from "./containers/HomePage";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;
    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;

    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route>{"no match"}</Route>
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Routes);
