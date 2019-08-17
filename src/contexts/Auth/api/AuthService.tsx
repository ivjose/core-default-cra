import request from 'utils/api';

import { AuthSchema } from '../Types';

const signIn = ({ username, password }: AuthSchema) => {
  return request({
    url: 'https://68.183.177.173/api/v1/login',
    method: 'POST',
    data: {
      username,
      password,
    },
  });
};

const AuthService = {
  signIn,
};

export default AuthService;
