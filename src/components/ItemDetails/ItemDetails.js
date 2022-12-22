import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({ item }) => {
  const { addNewItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);

  const messageError = () => {
    toast.error("No hay stock suficiente", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  function handleAdd() {
    if (currentStock >= count) {
      setCurrentStock(currentStock - count);
      addNewItem(item, count);
    } else {
      messageError();
    }
    setCount(1);
  }

  function handleCount(quantity) {
    if (quantity === 1) setCount(count + 1);
    else setCount(count - 1);
  }

  function goCart() {
    navigate("/cart");
  }

  return (
    <div className="flex bg-white rounded p-10 transition-all shadow hover:shadow-lg">
      {/* Item image */}
      <div className="flex justify-center w-1/2">
        <img className="max-h-[500px]" src={item.imageUrl} alt={item.name} />
      </div>

      {/* Item description */}
      <div className="flex flex-col justify-center pl-10">
        <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
        <p className="mt-4 text-xl text-black">{item.description}</p>
        <p className="mt-4 text-xl text-black">
          Precio: <strong className="text-gray-800">${item.price}</strong>
        </p>
        {currentStock > 0 && (
          <p className=" text-lg text-black">En Stock: {currentStock}</p>
        )}

        <div className="flex flex-col flex-1 items-center">
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount
              count={count}
              amount={item.stock}
              setCant={handleCount}
            />
          ) : (
            <p className="text-red-500 mt-10">Sin stock</p>
          )}
          {currentStock !== 0 && (
            <div className="w-full flex flex-col items-center">
              <button
                onClick={handleAdd}
                className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
              >
                Agregar al carrito
              </button>
            </div>
          )}
          <button
            onClick={goCart}
            className="w-4/5 bg-gray-800 text-white px-4 py-2 mt-2 rounded"
          >
            Ir al carrito
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ItemDetails;
