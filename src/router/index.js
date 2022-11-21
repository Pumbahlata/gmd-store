import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartView from "../views/cart";
import CategoryView from "../views/category";
import ItemDetailView from "../views/itemDetail";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/category/:category", element: <CategoryView /> },
  { path: "/item/:id", element: <ItemDetailView /> },
  { path: "/cart", element: <CartView /> },
]);
