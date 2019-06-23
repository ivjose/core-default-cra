import React from 'react';
import { Route, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { authContext } from 'contexts/Auth/AuthContext';
import { IPageChecker } from 'utils/Types';
import Loader from 'components/Loader';
import { DashboardLayout } from 'components/Layout';

const PrivateRoute: React.FC<RouteComponentProps & IPageChecker> = ({ component: Component, ...rest }) => {
  const { auth } = React.useContext(authContext);

  return (
    <React.Suspense fallback={<Loader />}>
      <DashboardLayout>
        <Route
          {...rest}
          render={props => {
            return auth.status ? (
              <div className="Layout">
                <Component {...props} />
              </div>
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
      </DashboardLayout>
    </React.Suspense>
  );
};

export default withRouter(PrivateRoute);
