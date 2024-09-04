import { createContext, useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

export const ValueContext = createContext(null);

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  return (
    <div className="bg-[#c5e4e7] lg:h-screen h-full flex flex-col justify-center items-center">
      <div className="text-xl font-semibold text-[#5e7a7d] max-lg:mt-10">
        <h1>S P L I</h1>
        <h1>T T E R</h1>
      </div>
      <div className="flex lg:flex-row flex-col bg-white p-4 rounded-xl justify-between gap-4 mt-16">
        <ValueContext.Provider
          value={{
            value: [bill, setBill],
            value2: [tip, setTip],
            value3: [people, setPeople],
          }}
        >
          <Input />
          <Result />
        </ValueContext.Provider>
      </div>
      <div className="max-lg:mb-8">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.frontendmentor.io/profile/adiborse111" className="text-blue-500">Aditya Borse</a>.
      </div>
    </div>
  );
};

export default TipCalculator;
