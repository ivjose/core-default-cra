import * as React from 'react';

/** Custom types */
import { localStorage } from 'utils/helpers';
import AuthService from './api/AuthService';
import { State, AuthSchema, ActionType, Action } from './Types';

/** Utils */
import { DEFAULT_USER_AUTH } from './constants';
import { AuthReducer } from './reducers';

interface AuthContextInterface {
  auth: State;
  signInUser: ({ username, password }: AuthSchema) => void;
  logoutUser: () => void;
  authUser: (userAuth: State) => void;
}

export const authContext = React.createContext<AuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  signInUser: () => {},
  logoutUser: () => {},
  authUser: () => {},
});

const { Provider } = authContext;

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, dispatch] = React.useReducer<React.Reducer<State, Action>>(AuthReducer, DEFAULT_USER_AUTH);

  const authUser = (userAuth: State) => {
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

  const signInUser = async ({ username, password }: AuthSchema) => {
    try {
      const response = await AuthService.signIn({ username, password });

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

  React.useEffect(() => {
    const loadToken = () => {
      const returnValue: string | null = localStorage.get('UserAuth');
      console.log(returnValue);

      if (typeof returnValue === 'string') {
        authUser(JSON.parse(returnValue));
      } else {
        logoutUser();
      }
    };

    loadToken();
  }, []);

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
