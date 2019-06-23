import * as React from 'react';

import { DEFAULT_USER_AUTH } from './constants';
import { IState, ActionType, IAction } from './Types';

export const AuthReducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.AUTH_SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.AUTH_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.AUTH_LOGOUT:
      return {
        ...state,
        ...DEFAULT_USER_AUTH,
      };
    default:
      return state;
  }
};
