import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCheckout from "../components/ItemCheckout/ItemCheckout";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget/TrashWidget";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { productsAdded, removeItem, clear, totalAmount } =
    useContext(CartContext);
  const navigate = useNavigate();

  function goToCheckout() {
    navigate("/checkout");
  }

  return (
    <Layout>
      {productsAdded.length < 1 ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mercapp.shop/shop/img/sinproductos.png"
            alt="Carro vacio"
          />
        </div>
      ) : (
        <div>
          <div className="flex gap-4 justify-center mt-4">
            {productsAdded.map((product) => {
              const quantityAdded = product.quantityAdded;
              return (
                <div className="relative">
                  <ItemCheckout
                    product={product.item}
                    quantityAdded={quantityAdded}
                  />
                  <TrashWidget itemId={product.item.id} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <strong> Total a pagar: ${totalAmount}</strong>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={goToCheckout}
              className="rounded-lg p-2 bg-gray-800 text-white"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CartView;
