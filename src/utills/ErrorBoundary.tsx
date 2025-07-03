
'use client' 

import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || <DefaultFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const DefaultFallback = ({ error }: { error?: Error }) => (
  <div className="error-boundary-fallback">
    <h2>Something went wrong</h2>
    <p>{error?.message}</p>
    <button 
      onClick={() => window.location.reload()}
      className="reload-button"
    >
      Reload Page
    </button>
  </div>
);

export default ErrorBoundary;