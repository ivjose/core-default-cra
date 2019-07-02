import React, { Component } from 'react';
import { PageInternalError } from 'components/ErrorPages';

interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<{}, IState> {
  state: IState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render({ hasError } = this.state) {
    if (hasError) {
      return <PageInternalError />;
    }
    return this.props.children;
  }
}
