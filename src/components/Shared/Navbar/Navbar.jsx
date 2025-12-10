import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../Logo";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handlelogout = async () => {
    try {
      await logOut();
      toast.success("Log out successful!");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed!");
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-gray-600 font-medium 
             hover:text-white hover:bg-transparent transition-colors duration-200 text-xl ${
               isActive ? "text-white underline" : ""
             }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-gray-600 font-medium 
            hover:text-white hover:bg-transparent transition-colors duration-200 text-xl ${
              isActive ? "text-white underline" : ""
            }`
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-gray-600 font-medium 
           hover:text-white hover:bg-transparent transition-colors duration-200 text-xl ${
             isActive ? "text-white underline" : ""
           }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className="navbar bg-linear-to-b from-blue-300 to-blue-400 px-16
  border-b border-blue-300 "
    >
      <div className="navbar-start ">
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
            className="menu menu-sm bg-blue-400 dropdown-content  rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="pl-12">
        {/* Theme Toggle */}
        <div className="hidden md:block">
          <label className="flex cursor-pointer gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
            </svg>

            <input
              type="checkbox"
              onChange={(e) => handleTheme(e.target.checked)}
              defaultChecked={theme === "dark"}
              className="toggle"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>
        </div>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  src={user.photoURL || "/default-user.png"}
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 pb-7 shadow-sm"
              >
                <li>
                  <button
                    className="hover:bg-red-600 hover:text-white"
                    onClick={handlelogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="
        bg-blue-400 hover:bg-blue-600 font-semibold text-xl px-3 py-1 rounded-lg text-white
        "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
                 bg-blue-400 hover:bg-blue-600 font-semibold text-xl px-3 py-1 rounded-lg text-white
        "
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
