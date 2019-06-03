import React, { Component } from 'react';

interface ProviderState {
  isAuthenticated: boolean;
}
interface ProviderStore {
  state: ProviderState;
  handleLogout: () => void;
  handleLogin: () => void;
}

const Context = React.createContext<ProviderStore | null>(null);

export const AuthProvider = Context.Provider;

export const AuthConsumer = Context.Consumer;

class Auth extends React.Component<{}, ProviderState> {
  public readonly state = {
    isAuthenticated: false,
  };

  private handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  private handleLogout = () => {
    this.setState({ isAuthenticated: false });
  };

  public render() {
    const store: ProviderStore = {
      state: this.state,
      handleLogout: this.handleLogout,
      handleLogin: this.handleLogin,
    };

    return <AuthProvider value={store}>{this.props.children}</AuthProvider>;
  }
}

export default Auth;
