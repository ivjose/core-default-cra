export interface Loading {
  loading?: boolean;
}

export interface State extends Loading {
  token: string;
  status: boolean;
  error?: string;
  success?: string;
}

export interface AuthSchema {
  email: string;
  password: string;
}

export enum ActionType {
  AUTH_SIGN_IN = 'AUTH_SIGN_IN',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILED = 'AUTH_FAILED',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export interface Action {
  type: ActionType;
  payload?: State | Loading;
}

// export interface State {
//   token: string;
//   status: boolean;
// }
