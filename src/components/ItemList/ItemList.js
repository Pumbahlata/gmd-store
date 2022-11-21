import Item from "../Item/Item";

const ItemList = ({ products, category }) => {
  return (
    <div className="">
      <ul className="relative grid grid-cols-4 gap-6">
        {products.map((product) => (
          <Item product={product} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
