import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const LoginPage = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const { addToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg('');

    if (!email.trim() || !password) {
      setErrorMsg(
        'Please enter both email and password.'
      );
      return;
    }

    setLoading(true);

    try {
      await login(email, password);

      addToast(
        'Login successful. Welcome to Firevy Admin Panel!',
        'success'
      );

      const destination =
        location.state?.from?.pathname ||
        '/admin/dashboard';

      navigate(destination, {
        replace: true
      });

    } catch (error) {
      setErrorMsg(
        error.message ||
        'Invalid email or password.'
      );

      addToast(
        error.message ||
        'Authentication failed.',
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '420px',
          width: '100%',
          padding: '2.5rem 2rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-md)',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              color: '#0b0f19'
            }}
          >
            <Shield size={26} />
          </div>

          <h2
            style={{
              fontSize: '1.375rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}
          >
            FIREVY.CO
          </h2>

          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
              marginTop: '0.25rem'
            }}
          >
            Admin Panel Authentication
          </p>
        </div>

        {errorMsg && (
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor:
                'rgba(239, 68, 68, 0.12)',
              border:
                '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 'var(--radius-md)',
              color: '#fca5a5',
              fontSize: '0.8125rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Admin Email
            </label>

            <div className="search-bar-wrap">
              <Mail
                size={16}
                className="search-icon"
              />

              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="admin@firevy.co"
                required
                autoComplete="username"
                disabled={loading}
              />
            </div>
          </div>

          <div
            className="form-group"
            style={{
              marginBottom: '1.5rem'
            }}
          >
            <label className="form-label">
              Password
            </label>

            <div className="search-bar-wrap">
              <Lock
                size={16}
                className="search-icon"
              />

              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '0.9375rem'
            }}
          >
            <span>
              {loading
                ? 'Authenticating...'
                : 'Sign In'}
            </span>

            <ArrowRight size={16} />
          </button>
        </form>

        <div
          style={{
            marginTop: '1.75rem',
            paddingTop: '1.25rem',
            borderTop:
              '1px solid var(--border-subtle)',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}
        >
          Firevy.co Management Control Suite
        </div>
      </div>
    </div>
  );
};

export default LoginPage;