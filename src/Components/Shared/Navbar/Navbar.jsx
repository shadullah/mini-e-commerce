import toast from "react-hot-toast";
import { BiCart, BiLogOut, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { useAuth } from "../../../contexts/AuthContext/AuthContext";

const Navbar = ({ user, logout }) => {
  // const { user, logout } = useAuth();

  const handleLogout = () => {
    // logout();
    logout();
    toast.success("logout successfull", { duration: 3000 });
    // window.location.href = "/login";
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
          <ul className="flex items-center space-x-4 text-lg">
            <Link to="/carts">
              <li>
                <BiCart className="text-2xl" />
              </li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>

            {user ? (
              <>
                <li>
                  <button className="flex items-center" onClick={handleLogout}>
                    {" "}
                    <BiLogOut className="mr-1" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <Link className="flex items-center" to="/login">
                  <span className="mr-1">
                    <BiUser />
                  </span>
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
