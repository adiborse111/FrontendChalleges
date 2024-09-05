import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import { useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("")

  async function fetchAdvise() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const { slip } = await response.json();
    const { advice } = await slip;
    const { id } = await slip;

    return [advice,id];
  }

  const handleClick = () => {
    fetchAdvise()
      .then(([advice,id]) => {
        setAdvice(advice)
        setId(id)
    })
      .catch((err) => new Error(err));
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-[#1f2632] justify-center items-center">
        <div className="flex flex-col bg-[#323a49] p-8 justify-center items-center w-[26rem] rounded-xl">
          <h1 className="text-[#52ffa8] text-sm">ADVICE #{id}</h1>
          <div className="mt-4">
            <h1 className="text-2xl text-center text-white font-semibold">
              "{advice}"
            </h1>
          </div>
          <img src={divider} alt="img" className="mt-8 mb-4" />
        </div>
        <button
          className="bg-[#52ffa8] p-4 rounded-full absolute mt-64 hover:shadow-[0_0_2px_#52ffa8,inset_0_0_2px_#52ffa8,0_0_5px_#52ffa8,0_0_15px_#52ffa8,0_0_30px_#52ffa8] shadow-2xl"
          onClick={handleClick}
        >
          <img src={dice} alt="" />
        </button>
      </div>
    </>
  );
};

export default Advice;
