import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
/** Context API */
// shared components
import Loader from 'components/Loader';
import PrivateRoute from 'containers/Private/PrivateRoute';
import PublicRoute from 'containers/Public/PublicRoute';
import { Page404 } from 'components/ErrorPages';
import AuthContextProvider from './contexts/Auth/AuthContext';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './ErrorBoundary';

// Private Routes or Authenticated Routes
const Dashboard = React.lazy(() => import('containers/Private/Dashboard'));
const Profile = React.lazy(() => import('containers/Private/Profile'));

const EmployeeManagement = React.lazy(() => import('containers/Private/EmployeeManagement'));
const Timekeeping = React.lazy(() => import('containers/Private/Timekeeping'));
const Payroll = React.lazy(() => import('containers/Private/Payroll'));
const Reports = React.lazy(() => import('containers/Private/Reports'));
const CRUD = React.lazy(() => import('containers/Private/Settings/CRUD'));

// Routes can access in Public
const Login = React.lazy(() => import('containers/Public/Login'));
const AllForm = React.lazy(() => import('containers/Public/AllForm'));
const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <ErrorBoundary>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Redirect exact from="/" to="/login" />

            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/all-forms" component={AllForm} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />

            <PrivateRoute path="/employee-management" component={EmployeeManagement} />
            <PrivateRoute path="/timekeeping" component={Timekeeping} />
            <PrivateRoute path="/payroll" component={Payroll} />
            <PrivateRoute path="/reports" component={Reports} />

            <PrivateRoute path="/settings/crud" component={CRUD} />

            <Route exact path="/404" component={Page404} />
            <Route component={Page404} />
          </Switch>
        </React.Suspense>
      </ErrorBoundary>
    </AuthContextProvider>
  );
};

export default App;
