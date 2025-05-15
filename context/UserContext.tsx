'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
  token?: string;
};

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // full object expected
    }
  }, []);
  

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    return window.location.href = "/admin/dashboard"

  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    return window.location.href = "/admin-login"
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
