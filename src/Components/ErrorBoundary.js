class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { error };
    }
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return <h1>{error.toString()}</h1>;
      }
  
      return this.props.children; 
    }
  }