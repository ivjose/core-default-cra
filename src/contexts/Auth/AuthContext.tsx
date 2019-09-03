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
  signInUser: ({ email, password }: AuthSchema) => void;
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
  const returnValue: string | null = localStorage.get('UserAuth');

  const [auth, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    AuthReducer,
    returnValue ? { ...DEFAULT_USER_AUTH, ...JSON.parse(returnValue) } : DEFAULT_USER_AUTH,
  );

  const authUser = (userAuth: State) => {
    localStorage.save({ value: userAuth, name: 'UserAuth' });
    console.log(userAuth, 'DDD TEST VALUE asdasd');

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

  const signInUser = async ({ email, password }: AuthSchema) => {
    try {
      const response = await AuthService.signIn({ email, password });

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
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error);
    }
  };

  React.useEffect(() => {
    const loadToken = () => {
      console.log(auth, 'Dddd ====asd');
      if (!auth.status) {
        logoutUser();
      }
      // if (typeof returnValue === 'string') {
      //   authUser(JSON.parse(returnValue));
      // } else {

      // }
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
