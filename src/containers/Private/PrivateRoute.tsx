import * as React from 'react';
import { Route, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { authContext } from 'contexts/Auth/AuthContext';
import { PageChecker } from 'utils/Types';
import Loader from 'components/Loader';
import { DashboardLayout } from 'components/Layout';

const PrivateRoute: React.FC<RouteComponentProps & PageChecker> = ({ component: Component, ...rest }) => {
  const { auth } = React.useContext(authContext);

  return (
    <Route
      {...rest}
      render={props => {
        return auth.status ? (
          <DashboardLayout>
            <React.Suspense fallback={<Loader />}>
              <Component {...props} />
            </React.Suspense>
          </DashboardLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname },
            }}
          />
        );
      }}
    />
  );
};

export default withRouter(PrivateRoute);
