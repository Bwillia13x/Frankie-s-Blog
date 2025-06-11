"use client"; // Error boundaries must be Client Components

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button is available

interface Props {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    // Sentry.captureException(error, { extra: errorInfo }); // Example
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    // Potentially, you might want to add a mechanism to actually re-attempt the render
    // or navigate the user, but a simple reset is a start.
    // window.location.reload(); // Or a more sophisticated retry logic
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-4 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h1>
          <p className="text-slate-300 mb-6">
            We're sorry for the inconvenience. Please try refreshing the page or clicking the button below.
          </p>
          {this.state.error && (
            <details className="mb-6 bg-slate-800 p-4 rounded-lg text-left w-full max-w-2xl">
              <summary className="cursor-pointer text-slate-400 hover:text-slate-200">Error Details (for debugging)</summary>
              <pre className="mt-2 text-xs text-slate-300 whitespace-pre-wrap break-all">
                {this.state.error.toString()}
                {this.state.error.stack && `\n\nStack Trace:\n${this.state.error.stack}`}
              </pre>
            </details>
          )}
          <Button onClick={this.handleRetry} className="bg-blue-600 hover:bg-blue-700">
            Try Again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
