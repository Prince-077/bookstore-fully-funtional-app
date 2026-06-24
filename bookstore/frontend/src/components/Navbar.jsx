import React, { useEffect, useState } from "react";
import Login from "./Login";
import Nodecontext from "./Nodecontext";
import { useContext } from "react";
import Logout from "./Logout";

function Navbar() {
  const [sticky, setsticky] = useState(false);
  const {isauth,setauth} = useContext(Nodecontext);

  useEffect(() => {
    const eventhandle = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", eventhandle);
  }, []);
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto z-10 md:px-20 px-4 fixed top-0 left-0 right-0 ${
          sticky
            ? "sticky-navbar shadow-xl bg-base-300 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Course">Course</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
              </ul>
            </div>
            <a className="text-xl font-bold cursor-pointer  ">Book store</a>
        
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Course"> Course</a>
                </li>
                <li>
                  <a href="/Contact">contact</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block ">
              <div className="gap-2">
                <label className="input input-bordered flex items-center  h-10 px-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
         
            {isauth !== null? (<Logout />) : (<div> 
            <a className="btn bg-black rounded-md text-white font-bold  hover:bg-slate-800 duration-300" onClick={()=>document.getElementById('my_modal_3').showModal()}>
              Login
            </a>
            <Login />
            </div>
           )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
