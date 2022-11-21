import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-slate-300 p-7">
      <a
        href="/"
        alt="logo"
        className="cursor-pointer text-orange-300 font-medium text-xl "
      >
        GMD STORE
        {/* <img src="/images/logo/logo.png" alt="Logo" /> */}
      </a>
      <ul className="list-none p-0 flex items-center">
        <li className="relative mr-7">
          <a href="/category/Nintendo">Nintendo</a>
        </li>
        <li className="relative mr-7">
          <a href="/category/Playstation">Playstation</a>
        </li>
        <li className="relative mr-7">
          <a href="/category/Xbox">Xbox</a>
        </li>
        <li className="relative mr-7">
          <a className="text-black" href="/cart">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
