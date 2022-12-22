import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { initializeApp } from "firebase/app";
import { CartContextProvider } from "./context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyDoK04UouNOLIcufNbJVmYL8u30iSGUQII",
  authDomain: "gmd-store.firebaseapp.com",
  projectId: "gmd-store",
  storageBucket: "gmd-store.appspot.com",
  messagingSenderId: "491829389450",
  appId: "1:491829389450:web:c93000f876f0089875e573",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
