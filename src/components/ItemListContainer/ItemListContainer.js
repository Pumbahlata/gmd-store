import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   new Promise((resolve) => {
  //     resolve(items);
  //   }).then((data) => {
  //     if (category) {
  //       const categories = data.filter(
  //         (product) => product.category === category
  //       );
  //       setProducts(categories);
  //     } else setProducts(data);
  //   });
  // }, [category]);

  // Consulta por ITEM
  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemRef = doc(db, "items", "9PUKjpuTlZu7ShxNCjEz");
  //   getDoc(itemRef).then((snapshot) => {
  //     if (snapshot.exists())
  //       setProducts([{ id: "9PUKjpuTlZu7ShxNCjEz", ...snapshot.data() }]);
  //   });
  // }, []);

  //CONSULTA POR TODOS LOS PRODUCTOS
  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "items");
  //   getDocs(itemsCollection).then((snapshot) => {
  //     const products = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     console.log("PRODUCTOS:", products);
  //     setProducts(products);
  //   });
  // }, []);

  //Consulta por query

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    if (category) {
      const q = query(itemsCollection, where("category", "==", category));
      getDocs(q).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      });
    } else {
      const q = query(itemsCollection, orderBy("category", "asc"));
      getDocs(q).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      });
    }
  }, [category]);

  return (
    <div className="h-full items-center">
      <div className="relative">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
