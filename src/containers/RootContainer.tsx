import * as React from 'react';

/** Context */
import { authContext } from 'contexts/Auth/AuthContext';
/** Presentation */
import { Wrapper } from '../components/Styles';

import Login from 'containers/Public/Login';

const RootContainer: React.FC<{}> = () => {
  const { auth, logoutUser } = React.useContext(authContext);
  console.log(auth, 'SSSSSSSSS');

  return (
    <Wrapper>
      {auth.status ? (
        <div>
          <button type="button" onClick={() => logoutUser()}>
            logout
          </button>
          Ooops
        </div>
      ) : null}
      {!auth.status && <Login />}
    </Wrapper>
  );
};

export default RootContainer;
