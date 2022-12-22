import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-yellow-300 p-7">
      <Link
        to={"/"}
        alt="logo"
        className="cursor-pointer text-black font-medium text-xl "
      >
        GMD STORE
        {/* <img src="/images/logo/logo.png" alt="Logo" /> */}
      </Link>
      <ul className="list-none p-0 flex items-center">
        <li className="relative mr-7  text-red-600">
          <Link to={"/category/Nintendo"}>Nintendo</Link>
        </li>
        <li className="relative mr-7 text-blue-900">
          <Link to={"/category/Playstation"}>Playstation</Link>
        </li>
        <li className="relative mr-7 text-green-600">
          <Link to={"/category/Xbox"}>Xbox</Link>
        </li>
        <li className="relative mr-7">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
