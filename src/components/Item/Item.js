import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className=" border-4 text-center">
      <p className=" text-sm text-black">{product.name}</p>
      <img src={product.imageUrl} className=" w-60 h-60" alt="Product" />
      {product.stock > 0 ? (
        <div>
          <Link className="text-indigo-600" to={`/item/${product.id}`}>
            Ver detalle
          </Link>
          <div className="border-solid rounded border-2">
            <p className=" text-orange-300">
              Stock disponible: {product.stock}
            </p>
          </div>
        </div>
      ) : (
        <div className="border-solid rounded border-2">
          <p>-</p>
          <p className=" text-red-500"> Sin stock</p>
        </div>
      )}
    </div>
  );
};

export default Item;
