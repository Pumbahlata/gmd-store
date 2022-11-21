import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import { items } from "../ItemMock/ItemMock";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    new Promise((resolve) => {
      resolve(items);
    }).then((data) => {
      if (id) {
        const showItem = data.filter((i) => i.id === Number(id));
        setItem(showItem);
      } else setItem(data);
    });
  }, [id]);

  // Para cuando use SetTimeOut o tenga los servicios
  //   if (!item) {
  //     return <p>Loading...</p>;
  //   }

  if (item) {
    return (
      <div className="">
        <ItemDetails item={item[0]} />
      </div>
    );
  }
};

export default ItemDetailsContainer;
