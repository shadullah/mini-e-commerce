import { Outlet } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
// import "react-hot-toast/dist/index.css";

function App() {
  return (
    <>
      <div>
        <div>
          <Toaster position="top-right" />
        </div>
        <Navbar />

        <main className="max-w-[1200px] mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
