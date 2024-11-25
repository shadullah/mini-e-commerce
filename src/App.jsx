import { Outlet } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [len, setLen] = useState(0);

  const loginMain = (userData) => {
    setUser(userData);
    localStorage.setItem("id", userData.id);
    localStorage.setItem("token", userData.refreshToken);
    localStorage.setItem("accToken", userData.accessToken);
  };

  const logoutMain = () => {
    setUser(null);
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("accToken");
    // setLen(0);
  };

  return (
    <>
      <div>
        <AuthProvider>
          <div>
            <Toaster position="top-right" />
          </div>
          <Navbar user={user} logout={logoutMain} len={len} />

          <main className="max-w-[1200px] mx-auto">
            <Outlet context={{ loginMain, setLen }} />
          </main>
          <Footer />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
