import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const AuthContext = createContext(null);

const SESSION_KEY = 'firevy_admin_active_session';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage on initial load
  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_KEY);

    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);

        if (session && session.token) {
          setUser(session);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch {
        localStorage.removeItem(SESSION_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    if (!email || !password) {
      throw new Error('Please enter both email and password.');
    }

    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Invalid email or password.');
    }

    if (!data.token) {
      throw new Error('Authentication token not received.');
    }

    const adminSession = {
      id: data.admin?.id,
      name: data.admin?.name || 'Firevy Admin',
      email: data.admin?.email || email.trim().toLowerCase(),
      role: data.admin?.role || 'admin',
      token: data.token,
      avatar: 'AD'
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(adminSession));

    setUser(adminSession);
    setIsAuthenticated(true);

    return adminSession;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.clear();

    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
