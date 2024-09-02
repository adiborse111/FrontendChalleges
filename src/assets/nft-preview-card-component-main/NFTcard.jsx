import eq from "./images/image-equilibrium.jpg";
import eth from "./images/icon-ethereum.svg";
import clk from "./images/icon-clock.svg";
import av from "./images/image-avatar.png";
import view from "./images/icon-view.svg";

const NFTcard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#0d192b]">
      <div className="bg-[#14253d] flex flex-col p-4 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex justify-center items-center object-contain size-72 bg-[#00fff7]">
          <img src={view} alt="" className={`z-[1] absolute`} />
          <img
            src={eq}
            alt="img"
            className={`hover:opacity-50 hover:z-[0] z-[2]`}
          ></img>
        </div>
        <div className="text-white mt-4 text-xl hover:text-[#00fff7]">
          Equilibrium #3429
        </div>
        <div className="text-slate-500 mt-4 text-base w-72">
          Our Equilibrium collection promotes balance and calm.
        </div>
        <div className="flex flex-row justify-between mt-4 text-sm">
          <div className="text-[#00fff7] flex flex-row gap-2">
            <img src={eth} className="" />
            0.041ETH
          </div>
          <div className="text-slate-500 flex flex-row gap-2">
            <img src={clk} alt="clk" />3 days left
          </div>
        </div>
        <div className="flex flex-row mt-6 py-3 border-t-[1px] border-gray-500">
          <img src={av} alt="" className="size-6 border-2 rounded-full" />
          <div className="ml-3 text-gray-500">
            Creation of{" "}
            <span className="text-white hover:text-[#00fff7]">
              Jules Wyvern
            </span>
          </div>
        </div>
      </div>
      <div className="text-white text-xs mt-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/adiborse111"
          className="text-blue-500 hover:text-blue-700"
        >
          Aditya Borse
        </a>
        .
      </div>
    </div>
  );
};

export default NFTcard;
