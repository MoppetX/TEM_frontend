import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // great place to call an error logging service
  // e.g. Azure Monitor, Sentry, and TrackJS
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  // after an error was caught, state changed so this gets triggered
  componentDidUpdate() {
    if (this.state.redirect) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/'} noThrow />;
    }

    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to={'/'}>Click here</Link> to go back to home or just wait 5
          seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
