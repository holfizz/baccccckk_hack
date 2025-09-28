"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { apiClient } from "@/lib/api";
import { User } from "@/lib/api";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
  isEditorOrAdmin: boolean;
  setUser: (user: User) => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    try {
      const response = await apiClient.login(email, password);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await apiClient.register(userData);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    // Очищаем токены из куков с правильными настройками
    const isProduction = process.env.NODE_ENV === 'production';
    const domain = isProduction ? '' : '';
    const sameSite = isProduction ? '; samesite=strict' : '; samesite=lax';
    
    document.cookie = `accessToken=; path=/${domain}; max-age=0${sameSite}`;
    document.cookie = `refreshToken=; path=/${domain}; max-age=0${sameSite}`;
    setUser(null);
  };

  const isAdmin = user?.role === "ADMIN";
  const isEditorOrAdmin = user?.role === "EDITOR" || user?.role === "ADMIN";

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  useEffect(() => {
    const checkAuth = async () => {
      // Не проверяем авторизацию на странице логина и регистрации
      if (
        typeof window !== "undefined" &&
        (window.location.pathname.includes("/login") ||
          window.location.pathname.includes("/register"))
      ) {
        setLoading(false);
        return;
      }

      // Проверяем наличие токенов в куках
      if (typeof document !== "undefined") {
        const cookies = document.cookie.split(";");
        let hasAccessToken = false;
        
        cookies.forEach((cookie) => {
          const [name] = cookie.trim().split("=");
          if (name === "accessToken") hasAccessToken = true;
        });

        if (!hasAccessToken) {
          setUser(null);
          setLoading(false);
          return;
        }
      }

      try {
        const userData = await apiClient.getCurrentUser();
        setUser(userData);
      } catch (error) {
        // Если не удалось получить пользователя, значит не авторизован
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isEditorOrAdmin,
    setUser,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
