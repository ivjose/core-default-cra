import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';

/** Presentation */
import ErrorMessage from '../components/ErrorMessage';

/** Custom Hooks */
import useErrorHandler from '../utils/custom-hooks/ErrorHandler';

/** Context */
import { authContext } from '../contexts/AuthContext';

/** Utils */
import { apiRequest, validateLoginForm } from '../utils/Helpers';
import { Header } from '../components/Styles';

function Login() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const auth = React.useContext(authContext);
  const { error, showError } = useErrorHandler(null);

  const authHandler = async () => {
    try {
      setLoading(true);
      const response = await apiRequest('/api/v1/login', 'POST', {
        username: userEmail,
        password: userPassword,
      });

      console.log(response.data, 'success');

      const { token } = response.data;
      auth.setAuthStatus({ token, status: true });
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (validateLoginForm(userEmail, userPassword, showError)) {
          authHandler();
        }
      }}
      style={{ width: 300 }}
    >
      <Header>Sign in</Header>
      <br />
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="text"
          name="email"
          value={userEmail}
          placeholder="john@mail.com"
          onChange={e => setUserEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          name="password"
          value={userPassword}
          placeholder="Password"
          onChange={e => setUserPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={loading} block>
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </Form.Item>

      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
}

export default Login;
