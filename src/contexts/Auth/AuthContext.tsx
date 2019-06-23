import * as React from 'react';

/** Custom types */
import { IState, AuthSchema, ActionType, IAction } from './Types';

/** Utils */
import { DEFAULT_USER_AUTH } from './constants';
import request from 'utils/api';
import { AuthReducer } from './reducers';

interface IAuthContextInterface {
  auth: IState;
  signInUser: ({ email, password }: AuthSchema) => void;
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
  // const [auth, dispatch] = React.useReducer(AuthReducer, DEFAULT_USER_AUTH);

  const [auth, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(AuthReducer, DEFAULT_USER_AUTH);

  const signInUser = async ({ email, password }: AuthSchema) => {
    try {
      const response = await request({
        url: '/api/login',
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      // console.log(response, 'data Chec');

      dispatch({ type: ActionType.AUTH_SIGN_IN });
      authUser({ status: true, ...response });
    } catch (error) {
      // console.log(error, 'data ERRROR');
    }
  };

  const authUser = (userAuth: IState) => {
    window.localStorage.setItem('UserAuth', JSON.stringify(userAuth));
    dispatch({ type: ActionType.AUTH_SUCCESS, payload: userAuth });
  };

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({ type: ActionType.AUTH_LOGOUT, payload: DEFAULT_USER_AUTH });
  };
  console.log(auth, 'AUTH VALUE UDPATE');

  return <Provider value={{ auth, signInUser, logoutUser, authUser }}>{children}</Provider>;
};

export default AuthProvider;
