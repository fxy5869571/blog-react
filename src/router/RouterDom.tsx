import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Article from "../containers/Article";
import App from "../containers/App";
class Demo extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} component={App} path="/" />
          <Route exact={true} component={Article} path="/article" />
        </Switch>
      </Router>
    );
  }
}

export default Demo;
