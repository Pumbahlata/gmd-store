import { createContext, useEffect, useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function addNewItem(item, quantity) {
    const checked = isInCart(item.id);
    if (checked) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
                ...productAdded,
                quantityAdded: productAdded.quantityAdded + quantity,
              }
            : productAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity })
      );
    }
  }

  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalAmount(amount);
  }, [productsAdded]);

  // function updateStock(units, item) {
  //   const db = getFirestore();
  //   const dbStock = doc(db, "items", item.id);
  //   const newStock = item.stock - units;
  //   updateDoc(dbStock, { stock: newStock });
  // }

  function removeItem(itemId) {
    setProductsAdded((prevState) =>
      prevState.filter((product) => product.item.id !== itemId)
    );
  }

  function clear() {
    setProductsAdded([]);
    setTotalAmount(0);
  }

  function isInCart(id) {
    if (productsAdded)
      return Boolean(productsAdded.find((product) => product.item.id === id));
  }

  return (
    <CartContext.Provider
      value={{
        addNewItem,
        removeItem,
        clear,
        isInCart,
        productsAdded,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
