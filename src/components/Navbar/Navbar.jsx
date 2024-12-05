import "animate.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from "./../../assets/image-removebg-preview (3).png";
import { successAlert } from "./../alert/SuccessAlert";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  // theme change
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      `${dark ? "dark" : "light"}`
    );
  }, [dark]);

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
      className={({ isActive }) => `${isActive ? "text-[#28AE4E] " : ""} 
      ${i > 1 ? (user ? "" : `hidden`) : ""}
      `}
    >
      {({ isActive }) => (
        <li className="relative group">
          {name}
          <div
            className={`hidden lg:block ${
              isActive ? "w-full" : "w-0 group-hover:w-full "
            } absolute -bottom-1  left-0  duration-200 h-0.5 bg-[#28AE4E] rounded-full`}
          ></div>
        </li>
      )}
    </NavLink>
  ));
  useEffect(() => {
    fetch(`http://localhost:4000/users/${user?.email}`)
      .then((res) => user && res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  // sign out
  const signOutUserHandler = () => {
    signOutUser().then(() => {
      successAlert("Sign out success!");
    });
    navigate("/");
  };
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <nav className=" bg-black/85 w-full  flex justify-between items-center h-20 px-2 text-white/80 sm:px-5 md:px-10">
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
            <div className=" flex items-center gap-2">
              <div className="form-control hidden sm:block ">
                <label className="label cursor-pointer">
                  <input
                    onClick={() => setDark(!dark)}
                    type="checkbox"
                    className="toggle "
                    defaultChecked
                  />
                </label>
              </div>
              <ul className="menu menu-horizontal ">
                {user ? (
                  <>
                    <button
                      onClick={signOutUserHandler}
                      className="btn btn-sm btn-outline hidden sm:block hover:border-[#28AE4E] hover:text-[#28AE4E] text-white/80"
                    >
                      <li>Sign Out</li>
                    </button>
                  </>
                ) : (
                  <div className="relative">
                    <NavLink
                      to="/log-in"
                      className={({ isActive }) => `
                          ${
                            isActive
                              ? "bg-[#28AE4E] text-white"
                              : "bg-inherit text-[#28AE4E]"
                          } 
                          btn btn-sm hover:text-white hover:bg-[#28AE4E] hover:border-[#28AE4E]
                          border rounded-md border-[#28AE4E] 
                          animate__animated  animate__headShake animate__infinite	animate__slower animate__delay-2s 
                        `}
                    >
                      Log In
                    </NavLink>
                    <NavLink
                      to="/register"
                      className={({ isActive }) => `${
                        isActive
                          ? "bg-[#28AE4E] text-white"
                          : "bg-inherit text-[#28AE4E]"
                      }
                        btn btn-sm hover:text-white hover:bg-[#28AE4E] hover:border-[#28AE4E] border rounded-md border-[#28AE4E] ml-2`}
                    >
                      <li>Register</li>
                    </NavLink>
                  </div>
                )}
              </ul>
              <div
                className={`w-10 h-10 bg-white rounded-full  ${
                  !user && "hidden"
                }`}
                data-tooltip-id="my-tooltip-border"
                data-tooltip-content={user?.name || user?.displayName}
              >
                <Tooltip
                  id="my-tooltip-border"
                  border="1px solid green"
                  place="left-end"
                />
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photo || user?.photoURL}
                  alt=""
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full z-50 w-80">
            <div className="flex justify-between bg-base-300 items-center border-b-2 mb-5 p-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    onClick={() => setDark(!dark)}
                    type="checkbox"
                    className="toggle "
                    defaultChecked
                  />
                </label>
              </div>
              {user && (
                <button
                  onClick={signOutUserHandler}
                  className="btn btn-sm btn-outline hover:border-[#28AE4E] hover:text-[#28AE4E] "
                >
                  <li>Sign Out</li>
                </button>
              )}
            </div>
            <span className="px-4 flex flex-col gap-4">{links}</span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
