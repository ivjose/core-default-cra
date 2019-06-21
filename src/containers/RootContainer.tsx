import * as React from 'react';

/** Context */
import { authContext } from '../contexts/AuthContext';
/** Presentation */
import { Wrapper } from '../components/Styles';

import Login from './Login';

function RootContainer() {
  const { auth, setUnauthStatus } = React.useContext(authContext);
  return (
    <Wrapper>
      {auth.status ? (
        <div>
          <button type="button" onClick={() => setUnauthStatus()}>
            logout
          </button>
          Ooops
        </div>
      ) : null}
      {!auth.status && <Login />}
    </Wrapper>
  );
}

export default RootContainer;
