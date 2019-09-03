import request from 'utils/api';

import { AuthSchema } from '../Types';

const signIn = ({ email, password }: AuthSchema) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      email,
      password,
    },
  });
};

const AuthService = {
  signIn,
};

export default AuthService;
