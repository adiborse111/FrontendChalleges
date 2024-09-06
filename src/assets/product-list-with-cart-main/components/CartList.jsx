import empty from "../assets/images/illustration-empty-cart.svg";

const CartList = () => {
  return (
    <div className="bg-white ml-6 h-fit p-6">
      <h1 className="text-lg font-semibold text-red-500">Your Cart (0)</h1>
      <div className="flex flex-col justify-center items-center p-8 px-20">
        <img src={empty} alt="" />
        <h1 className="text-xs">Your added items will appear here</h1>
      </div>
    </div>
  );
};

export default CartList;
