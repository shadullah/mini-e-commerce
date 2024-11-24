import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("id");
    if (storedUser) {
      setUser({ id: storedUser });
    }
  }, []);

  const login = (userId, refreshToken, accessToken) => {
    localStorage.setItem("id", userId);
    localStorage.setItem("token", refreshToken);
    localStorage.setItem("accToken", accessToken);
    setUser({ id: userId });
  };

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("accToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
