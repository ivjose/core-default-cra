// LIBRARIES
import React from 'react';
import { Switch, Route, RouteComponentProps, Link } from 'react-router-dom';
// COMPONENTS
import EmployeeManagementCreate from './Create';
import EmployeeManagementView from './View';
import EmployeeManagementUpdate from './Update';
import EmployeeManagementList from './List';
import { Page404 } from 'components/ErrorPages';

const EmployeeManagement: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}`}> Table list</Link> | <Link to={`${match.url}/view`}> View</Link> |
      <Link to={`${match.url}/update`}> Update</Link> | <Link to={`${match.url}/create`}> Create</Link>
      <Switch>
        <Route exact path={`${match.url}/create`} component={EmployeeManagementCreate} />
        <Route exact path={`${match.url}/update`} component={EmployeeManagementUpdate} />
        <Route exact path={`${match.url}/view`} component={EmployeeManagementView} />
        <Route exact path={`${match.url}`} component={EmployeeManagementList} />
        <Page404 />
      </Switch>
    </div>
  );
};

export default EmployeeManagement;
