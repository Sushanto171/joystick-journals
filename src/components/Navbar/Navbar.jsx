import React from "react";
import { Link, NavLink } from "react-router";
import logo from "./../../assets/image-removebg-preview (3).png";
const Navbar = () => {
  const user = true;
  //
  const navName = [
    "Home",
    "All Reviews",
    "Add Review",
    "My Reviews",
    "Game WatchList",
  ];

  const links = navName.map((name, i) => (
    <NavLink
      key={i}
      to={`/${name === "Home" ? "" : name.toLowerCase().split(" ").join("-")}`}
      className={({ isActive }) => `${isActive ? "text-green-500 " : ""} 
      ${i > 1 ? (user ? "" : `hidden`) : ""}
      `}
    >
      {({ isActive }) => (
        <li className="relative group">
          {name}
          <div
            className={`hidden lg:block ${
              isActive ? "w-full" : "w-0 group-hover:w-full "
            } absolute -bottom-1  left-0  duration-200 h-1 bg-[#28AE4E] rounded-full`}
          ></div>
        </li>
      )}
    </NavLink>
  ));

  {
    /* <NavLink
        to="/dsf"
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        <li className="relative group">
          All Reviews
          <div className="absolute -bottom-1  left-0 w-0 group-hover:w-full duration-200 h-1 bg-[#28AE4E] rounded-full"></div>
        </li>
      </NavLink>{" "}
      <NavLink
        to="afd"
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        <li className="relative group">
          Add Review
          <div className="absolute -bottom-1  left-0 w-0 group-hover:w-full duration-200 h-1 bg-[#28AE4E] rounded-full"></div>
        </li>
      </NavLink>{" "}
      <NavLink
        to="/sadf"
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        <li className="relative group">
          My Reviews
          <div className="absolute -bottom-1  left-0 w-0 group-hover:w-full duration-200 h-1 bg-[#28AE4E] rounded-full"></div>
        </li>
      </NavLink>{" "}
      <NavLink
        to="/fds"
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        <li className="relative group">
          Game WatchList
          <div className="absolute -bottom-1  left-0 w-0 group-hover:w-full duration-200 h-1 bg-[#28AE4E] rounded-full"></div>
        </li>
      </NavLink> */
  }

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className=" bg-black/85 w-full  flex justify-between items-center h-20 text-white px-10">
            <div className="md:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn px-0 btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 lg:flex-none">
              <Link to={"/"}>
                <img className="w-60" src={logo} alt="" />
              </Link>
            </div>
            <div className="hidden flex-none md:block">
              <ul className=" gap-4 flex">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
            <div className=" flex ">
              <ul className="menu menu-horizontal ">
                {user ? (
                  <>
                    <button>
                      <li>Sign Out</li>
                    </button>
                  </>
                ) : (
                  <>
                    <button>
                      <li>Login</li>
                    </button>
                    <button>
                      <li>Register</li>
                    </button>
                  </>
                )}
              </ul>
              <div
                className="bg-white rounded-full tooltip tooltip-bottom"
                data-tip="hello"
              >
                <img className="w-10 h-10 rounded-full" src="" alt="" />
              </div>
            </div>
          </nav>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
