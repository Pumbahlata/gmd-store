const ItemCount = ({ count, amount, setCant }) => {
  return (
    <>
      <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
        <button
          className="flex justify-center items-center p-2 w-2/5 h-full bg-blue-600 text-white"
          disabled={count <= 1}
          onClick={() => setCant(-1)}
        >
          -
        </button>
        <input
          className="flex justify-center text-center"
          value={count}
          readOnly
        ></input>
        <button
          className="flex justify-center items-center p-2 w-2/5 h-full bg-blue-600 text-white"
          disabled={count >= amount}
          onClick={() => setCant(1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
