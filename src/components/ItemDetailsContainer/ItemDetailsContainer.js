import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  // useEffect(() => {
  //   new Promise((resolve) => {
  //     resolve(items);
  //   }).then((data) => {
  //     if (id) {
  //       const showItem = data.filter((i) => i.id === id);
  //       setItem(showItem);
  //     } else setItem(data);
  //   });
  // }, [id]);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) setItem([{ id: id, ...snapshot.data() }]);
    });
  }, [id]);

  if (item) {
    return (
      <div className=" flex justify-center items-center bg-slate-900">
        <ItemDetails item={item[0]} />
      </div>
    );
  }
};

export default ItemDetailsContainer;
