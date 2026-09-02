import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const AuthContext = createContext();

const SESSION_KEY = 'firevy_admin_active_session';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedSession =
      localStorage.getItem(SESSION_KEY);

    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);

        if (session?.token) {
          setUser(session);
          setIsAuthenticated(true);
        }
      } catch {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const login = async (email, password) => {
    if (!email || !password) {
      throw new Error(
        'Please enter both email and password.'
      );
    }

    const response = await fetch(
      'http://localhost:5000/api/v1/admin/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password
        })
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message ||
        'Invalid email or password.'
      );
    }

    if (!data.token) {
      throw new Error(
        'Authentication token not received.'
      );
    }

    const adminSession = {
      id: data.admin?.id,
      name: data.admin?.name,
      email: data.admin?.email,
      role: data.admin?.role,
      token: data.token
    };

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify(adminSession)
    );

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
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);