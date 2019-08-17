import * as React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { authContext } from 'contexts/Auth/AuthContext';
import { PageChecker } from 'utils/Types';
import Loader from 'components/Loader';
import { LoginLayout } from 'components/Layout';

const PublicRoute: React.FC<RouteComponentProps & PageChecker> = ({ component: Component, location, ...rest }) => {
  const { from } = location.state || { from: { pathname: '/dashboard' } };
  const { auth } = React.useContext(authContext);

  return (
    <Route
      {...rest}
      render={routeProps => {
        return auth.status ? (
          <Redirect to={from} />
        ) : (
          <LoginLayout>
            <React.Suspense fallback={<Loader />}>
              <Component {...routeProps} />
            </React.Suspense>
          </LoginLayout>
        );
      }}
    />
  );
};

export default withRouter(PublicRoute);
