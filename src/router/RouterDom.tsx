import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Hello from "../containers/Hello";
import Test from "../components/Test";
class Demo extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} component={Hello} path="/" />
          <Route component={Test} path="/test" />
        </Switch>
      </Router>
    );
  }
}

export default Demo;
