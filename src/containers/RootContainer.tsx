import * as React from 'react';

/** Context */
import { authContext } from '../contexts/AuthContext';
/** Presentation */
import { Wrapper } from '../components/Styles';

import AllForms from './AllForms';

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
      {!auth.status && <AllForms />}
    </Wrapper>
  );
}

export default RootContainer;
