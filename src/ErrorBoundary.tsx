import * as React from 'react';
import { PageInternalError } from 'components/ErrorPages';

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, State> {
  state: State = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <PageInternalError />;
    }
    return children;
  }
}
