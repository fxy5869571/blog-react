import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import Article from '../containers/Article'
import Articles from '../containers/Articles'
import Resume from '../containers/Resume'
import TimeFile from '../containers/TimeFile'

const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        <Route exact={true} path="/" component={Articles} />
        <Route exact={true} path="/article/:Id" component={Article} />
        <Route exact={true} path="/time-file" component={TimeFile} />
        <Route exact={true} path="/resume" component={Resume} />
      </Switch>
    </App>
  </Router>
)

export default RouterMap
