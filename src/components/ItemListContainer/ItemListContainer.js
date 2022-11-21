import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { items } from "../ItemMock/ItemMock";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      resolve(items);
    }).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else setProducts(data);
    });
  }, [category]);

  return (
    <div className="w-full h-full items-center">
      <div className="flex justify-center">
        <div className="relative">
          {category && (
            <p className="text-center text-4xl mb-5 flex  justify-center items-center ">
              {category}
            </p>
          )}
          <ItemList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
