import React from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Profile, Dashboard } from './Private';
import { Login } from './Public';
import PageNotFound from './components/PageNotFound';
import Auth from './Auth';

const App: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <Auth>
        <div>
          <ul>
            <li>
              <Button type="primary">
                <Link to="/">Login</Link>
              </Button>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/wala-pange">Page not found</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Auth>
    </Router>
  );
};

export default App;
