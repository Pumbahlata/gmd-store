import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/CartContext";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            alert("La compra finalizo con éxito");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
  }, [updatingProducts]);

  return (
    <Layout>
      <div className="flex justify-center">
        <form onSubmit={handleFinalizePurchase} className="flex flex-col w-1/2">
          <div className="flex flex-col justify-center">
            <input
              className="h-8 pl-4 mb-4 rounded-md"
              placeholder="Nombre Completo"
              required
            />
            <input
              className="h-8 pl-4 mb-4 rounded-md"
              placeholder="Numero de Telefono"
              type="number"
              required
            />
            <input
              className="h-8 pl-4 mb-4 rounded-md"
              placeholder="Email"
              type={"email"}
              required
            />
          </div>
          <p>
            Total a pagar: <strong>${totalAmount}</strong>
          </p>
          <button
            type="submit"
            className="rounded-lg p-2 bg-gray-800 text-white disabled:opacity-50"
            disabled={isLoading}
          >
            Finalizar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutView;
