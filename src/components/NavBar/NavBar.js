import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-slate-300 p-7">
      <Link
        to={"/"}
        alt="logo"
        className="cursor-pointer text-orange-300 font-medium text-xl "
      >
        GMD STORE
        {/* <img src="/images/logo/logo.png" alt="Logo" /> */}
      </Link>
      <ul className="list-none p-0 flex items-center">
        <li className="relative mr-7">
          <Link to={"/category/Nintendo"}>Nintendo</Link>
        </li>
        <li className="relative mr-7">
          <Link to={"/category/Playstation"}>Playstation</Link>
        </li>
        <li className="relative mr-7">
          <Link to={"/category/Xbox"}>Xbox</Link>
        </li>
        <li className="relative mr-7">
          <Link className="text-black" to={"/cart"}>
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
