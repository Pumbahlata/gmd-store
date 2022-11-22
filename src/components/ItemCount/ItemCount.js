import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ItemCount = ({ amount }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <button
          className=" border-4 border-solid rounded text-lg"
          disabled={count <= 0}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <input
          className="ml-4 mr-4 h-1/2 text-center"
          value={count}
          onChange=""
          readOnly
        ></input>
        <button
          className="border-4 border-solid rounded text-lg"
          disabled={count >= amount}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button className="ml-4" onClick={() => navigate("/cart")}>
          Agregar al carrito
        </button>
        <Link to={"/"}>Volver</Link>
      </div>
    </>
  );
};

export default ItemCount;
