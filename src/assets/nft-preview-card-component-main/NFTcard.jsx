import eq from "./images/image-equilibrium.jpg";
import eth from "./images/icon-ethereum.svg"
import clk from "./images/icon-clock.svg"

const NFTcard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0d192b]">
        <div className="bg-[#14253d] flex flex-col p-4 rounded-xl">
            <div className="object-contain size-72">
                <img src={eq} alt="img" />
            </div>
            <div className="text-white mt-4 text-xl">Equilibrium #3429</div>
            <div className="text-slate-500 mt-4 text-base w-72">Our Equilibrium collection promotes balance and calm.</div>
            <div className="flex flex-row justify-between mt-4 text-sm">
                <div className="text-[#00fff7] flex flex-row gap-2"><img src={eth} />0.041ETH</div>
                <div className="text-slate-500 flex flex-row gap-2"><img src={clk} alt="clk" />3 days left</div>
            </div>
        </div>
    </div>
  )
}

export default NFTcard