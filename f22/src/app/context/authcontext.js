"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("authcredentials");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = (email, password) => {
    localStorage.setItem(
      "authcredentials",
      JSON.stringify({ email, password })
    );
    setAuth({ email, password });
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("authcredentials");
    setAuth(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
