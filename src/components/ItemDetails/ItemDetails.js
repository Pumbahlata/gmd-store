import ItemCount from "../ItemCount/ItemCount";

const ItemDetails = ({ item }) => {
  return (
    <div className="flex justify-center">
      <div className="text-center border-solid rounded border-8 w-1/4">
        <p>{item.name}</p>
        <div className="flex justify-center">
          <img className="" src={item.imageUrl} alt={item.alt} />
        </div>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <ItemCount amount={item.stock} />
        {item.stock === 1 ? (
          <p>Último disponible</p>
        ) : (
          <p>{item.stock} unidades disponible</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
