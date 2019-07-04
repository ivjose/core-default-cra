import * as React from 'react';

/** Custom types */
import { IState, AuthSchema, ActionType, IAction } from './Types';

/** Utils */
import { DEFAULT_USER_AUTH } from './constants';
import request from 'utils/api';
import { localStorage } from 'utils/helpers';
import { AuthReducer } from './reducers';

interface IAuthContextInterface {
  auth: IState;
  signInUser: ({ username, password }: AuthSchema) => void;
  logoutUser: () => void;
  authUser: (userAuth: IState) => void;
}

export const authContext = React.createContext<IAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  signInUser: () => {},
  logoutUser: () => {},
  authUser: () => {},
});

const { Provider } = authContext;

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(AuthReducer, DEFAULT_USER_AUTH);

  React.useEffect(() => {
    const loadToken = () => {
      let returnValue: string | null = localStorage.get('UserAuth');
      console.log(returnValue);

      if (typeof returnValue === 'string') {
        authUser(JSON.parse(returnValue));
      } else {
        logoutUser();
      }
    };

    loadToken();
  }, []);

  const signInUser = async ({ username, password }: AuthSchema) => {
    try {
      const response = await request({
        url: '/api/v1/login',
        method: 'POST',
        data: {
          username,
          password,
        },
      });

      dispatch({
        type: ActionType.AUTH_SIGN_IN,
        payload: { loading: true },
      });
      authUser({
        ...response,
        status: true,
        loading: false,
      });
    } catch (error) {
      // console.log(error, 'data ERROR');
    }
  };

  const authUser = (userAuth: IState) => {
    localStorage.save({ value: userAuth, name: 'UserAuth' });
    dispatch({
      type: ActionType.AUTH_SUCCESS,
      payload: userAuth,
    });
  };

  const logoutUser = () => {
    localStorage.clear();
    dispatch({
      type: ActionType.AUTH_LOGOUT,
      payload: DEFAULT_USER_AUTH,
    });
  };

  return (
    <Provider
      value={{
        auth,
        signInUser,
        logoutUser,
        authUser,
      }}
    >
      {children}
    </Provider>
  );
};

export default AuthProvider;
