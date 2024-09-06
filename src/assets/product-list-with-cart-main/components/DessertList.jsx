/* eslint-disable react/jsx-key */
import { Button, Image } from "@nextui-org/react";
import waffle from "../assets/images/image-waffle-desktop.jpg";
import CartIcon from "../icon/CartIcon";
import { data } from "../testData";

const DessertModal = ({ data }) => {
  const img = data.image.desktop;
  return (
    <div className="flex flex-col">
      <img src={img} alt="" className="size-52 rounded" />
      <div className="absolute p-10 py-48">
        <Button
          startContent={<CartIcon />}
          className="bg-white border-2 rounded-full"
        >
          Add to Cart
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-1">
        <h1 className="text-xs text-gray-500">{data.category}</h1>
        <h1 className="font-bold text-sm">{data.name}</h1>
        <h1 className="text-sm text-red-600">${data.price}</h1>
      </div>
    </div>
  );
};

const DessertList = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Desserts</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((data) => (
            <DessertModal data={data} />
        ))}
        
      </div>
    </div>
  );
};

export default DessertList;
