import { Outlet } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

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
  };

  return (
    <>
      <div>
        <AuthProvider>
          <div>
            <Toaster position="top-right" />
          </div>
          <Navbar user={user} logout={logoutMain} />

          <main className="max-w-[1200px] mx-auto">
            <Outlet context={{ loginMain }} />
          </main>
          <Footer />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
