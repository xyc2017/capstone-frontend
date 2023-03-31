import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Set the state to indicate that an error has occurred
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Display an error message to the user
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    // Render the children of the component
    return this.props.children;
  }
}

export default ErrorBoundary;