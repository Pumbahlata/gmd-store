import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <a href="/" alt="logo">
        GMD STORE
        {/* <img src="/images/logo/logo.png" alt="Logo" /> */}
      </a>
      <ul>
        <li>
          <a href="/Contacto">Contacto</a>
        </li>
        <li>
          <a href="/Productos">Productos</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
