import React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { authContext } from 'contexts/Auth/AuthContext';
import { IPageChecker } from 'utils/Types';
import Loader from 'components/Loader';
import { LoginLayout } from 'components/Layout';

const PublicRoute: React.FC<RouteComponentProps & IPageChecker> = ({ component: Component, location, ...rest }) => {
  const { from } = location.state || { from: { pathname: '/dashboard' } };
  const { auth } = React.useContext(authContext);

  if (auth.status) {
    return <Redirect to={from} />;
  } else {
    return (
      <React.Suspense fallback={<Loader />}>
        <Route
          {...rest}
          render={routeProps => {
            return (
              <LoginLayout>
                <Component {...routeProps} />
              </LoginLayout>
            );
          }}
        />
      </React.Suspense>
    );
  }
};

export default withRouter(PublicRoute);
