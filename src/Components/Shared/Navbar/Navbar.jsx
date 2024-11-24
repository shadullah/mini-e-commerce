// import Link from "next/link";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [id, setUserId] = useState(null);

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       const userId = localStorage.getItem("id");
  //       setUserId(userId);
  //     }
  //   }, []);

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("accToken");
    setUserId(null);
    window.location.href = "/authenticate/login";
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center py-4">
        <div className="text-3xl">
          <Link href="/">
            WellCrafters <span className="text-orange-500">Mini</span>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4 text-lg">
            <Link to="/products">
              <li>Products</li>
            </Link>
            {id ? (
              <>
                <Link href="/products/add">
                  <li>Add Product</li>
                </Link>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li>Login</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
