import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../urls';
import { fetchWithAuth } from './auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchWithAuth(URLS.profile)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to fetch user data');
        })
        .then(userData => {
          setUser(userData);
          localStorage.setItem('role', userData.role);
          localStorage.setItem('userID', userData.id);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isLoggedIn, user]);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('role', userData.role);
    localStorage.setItem('userID', userData.id);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userID');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
