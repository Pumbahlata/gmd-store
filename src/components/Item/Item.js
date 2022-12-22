import { Link, useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  function goDetails() {
    navigate(`/item/${product.id}`);
  }

  return (
    <div className="flex  bg-white p-4 cursor-pointer" onClick={goDetails}>
      <div className="border-2 text-center">
        <h2 className="text-2x1 font-bold text-gray-800">{product.name}</h2>
        <img
          src={product.imageUrl}
          className=" w-80 h-60 flex justify-center object-contain items-center"
          alt="Product"
        />
        {product.stock > 0 ? (
          <div>
            <div className="border-solid rounded border-2">
              <p>${product.price}</p>
              <p className=" text-orange-300">Stock: {product.stock}</p>
            </div>
          </div>
        ) : (
          <div className="border-solid rounded border-2">
            <p>-</p>
            <p className=" text-red-500"> Sin stock</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
