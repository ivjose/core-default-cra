import React from 'react';
import { Switch, Route, RouteComponentProps, Link } from 'react-router-dom';
import { Page404 } from 'components/ErrorPages';

import CURDList from './List';
import CURDAdd from './Add';
import CURDEdit from './Edit';
import CURDView from './View';

const CRUD: React.FC<RouteComponentProps> = ({ match }) => {
  console.log(match.path);

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={CURDList} />
      <Route exact path={`${match.path}/add`} component={CURDAdd} />
      <Route exact path={`${match.path}/view/:id`} component={CURDView} />
      <Route exact path={`${match.path}/edit/:id`} component={CURDEdit} />
      <Page404 />
    </Switch>
  );
};

export default CRUD;
