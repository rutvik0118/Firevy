import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('[Editor Error Boundary Caught Error]:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '24px',
            backgroundColor: '#FEF2F2',
            border: '1px solid #FCA5A5',
            borderRadius: '12px',
            margin: '16px',
            color: '#991B1B'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <AlertTriangle size={24} color="#DC2626" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
              {this.props.title || 'Section Editor Error'}
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#7F1D1D', marginBottom: '16px' }}>
            An unexpected error occurred while rendering this section editor. You can reset the editor or restore section factory defaults.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="btn btn-secondary btn-sm"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A' }}
            >
              Retry Editor
            </button>
            <button
              onClick={this.handleReset}
              className="btn btn-primary btn-sm"
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF', border: 'none' }}
            >
              <RotateCcw size={14} style={{ marginRight: '4px' }} />
              Reset Section Defaults
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
