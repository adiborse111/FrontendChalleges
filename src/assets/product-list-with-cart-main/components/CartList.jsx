/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import empty from "../assets/images/illustration-empty-cart.svg";
import { ValueContext } from "../ProductListCart";

const CartList = () => {
  const { value } = useContext(ValueContext);
  const [data] = value;
  const [emptyCheck, setEmptyCheck] = useState(true);
  useEffect(() => {
    setEmptyCheck(true);
    data.map((data) => {
      if (data.amount !== 0) {
        setEmptyCheck(false);
      }
    });
  }, [data]);

  return (
    <div className="bg-white ml-6 h-fit p-6">
      <h1 className="text-lg font-semibold text-red-500">Your Cart (0)</h1>
      <div className="flex flex-col justify-center items-center p-8 px-20">
        {emptyCheck ? <img src={empty} alt="" /> : <></>}
        
        <h1 className="text-xs">Your added items will appear here</h1>
      </div>
    </div>
  );
};

export default CartList;
