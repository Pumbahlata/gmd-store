import Item from "../Item/Item";

const ItemList = ({ products, category }) => {
  return (
    <div>
      <ul className="relative grid grid-cols-5">
        {products.map((product) => (
          <Item key={product.id} product={product} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
