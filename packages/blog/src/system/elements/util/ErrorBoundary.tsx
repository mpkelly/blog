import React, { ReactNode } from 'react';

type Props = {
  fallback: ReactNode;
};

type State = {
  hasError: boolean;
  error: any;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false, error: null };

  componentWillReceiveProps() {
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
