import { Link, NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import Logo from "../Logo";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // logout handler
  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Log out successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed!");
    }
  };

  // theme effect
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-white font-medium text-xl
     hover:text-accent transition-colors duration-200
     ${isActive ? "text-accent underline" : ""}`;

  // links
  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-books" className={navClass}>
          All Books
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={navClass}>
          About Us
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/profile" className={navClass}>
            Profile
          </NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/dashboard" className={navClass}>
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-primary sticky top-0 z-50 px-16 border-b border-blue-300 dark:bg-black text-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-blue-400 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Theme Toggle */}
      <div className="mr-4">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={(e) => handleTheme(e.target.checked)}
            defaultChecked={theme === "dark"}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <img
                src={user.photoURL || "/default-user.png"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            <ul className="dropdown-content menu bg-base-300 rounded-box w-52 p-2 shadow">
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:bg-red-600 text-primary font-semibold hover:text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-accent text-primary border border-blue-600 hover:bg-blue-500 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="btn bg-accent text-primary border border-blue-600 hover:bg-blue-500 hover:text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
