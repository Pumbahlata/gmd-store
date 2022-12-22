const ItemCheckout = ({ product, quantityAdded }) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col flex-1">
        <h2 className="text-2x1 font-bold text-gray-800 text-center">
          {product.name}
        </h2>
        <img
          src={product.imageUrl}
          className=" w-52 h-32 object-cover mb-2"
          alt="Product"
        />
        <div>
          <div className="border-solid rounded border-2">
            <p>${product.price}</p>
            <p className=" text-orange-300">Agregados: {quantityAdded}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCheckout;
