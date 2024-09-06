import { createContext, useState } from "react";
import CartList from "./components/CartList";
import DessertList from "./components/DessertList";
import { data } from "./testData";

export const ValueContext = createContext(null);

const ProductListCart = () => {
  const [iData, setIData] = useState([...data]);
  const increaseAmount = (id, amt) => {
    setIData((prevData) =>
      prevData.map((iData) =>
        iData.id === id ? { ...iData, amount: amt } : iData
      )
    );
  };
  const decreaseAmount = (id, amt) => {
    setIData((prevData) =>
      prevData.map((iData) =>
        iData.id === id ? { ...iData, amount: amt } : iData
      )
    );
  };

  return (
    <div className="flex flex-row bg-yellow-50 px-52 py-20">
      <ValueContext.Provider value={{ value: [iData, increaseAmount, decreaseAmount], }}>
        <DessertList />
        <CartList />
      </ValueContext.Provider>
    </div>
  );
};

export default ProductListCart;
