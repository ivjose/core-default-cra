export interface ILoading {
  loading?: boolean;
}

export interface IState extends ILoading {
  token: string;
  status: boolean;
  error?: string;
  success?: string;
}

export interface AuthSchema {
  username: string;
  password: string;
}

export enum ActionType {
  AUTH_SIGN_IN = 'AUTH_SIGN_IN',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILED = 'AUTH_FAILED',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export interface IAction {
  type: ActionType;
  payload?: IState | ILoading;
}

// export interface IState {
//   token: string;
//   status: boolean;
// }
