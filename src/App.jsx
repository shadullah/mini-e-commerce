import { Outlet } from "react-router";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
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
