import illustration from "./assets/images/illustration-empty.svg";
import cal from "./assets/images/icon-calculator.svg";

const MortageRepayment = () => {
  return (
    <div className="bg-cyan-50 flex justify-center items-center md:h-screen">
      <div className="bg-white flex md:flex-row flex-col md:w-[140vh] rounded-2xl shadow-2xl md:justify-center md:items-center">
        <div className="flex flex-col p-4 md:w-1/2 px-8">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
            <button className="order-last text-gray-500 border-b-2 border-gray-400 mt-2 h-5">
              <h6 className="text-sm">Clear All</h6>
            </button>
          </div>
          <div className="flex flex-col mt-10">
            <div className="text-gray-500">Mortgage Amount</div>
            <div className="flex flex-row mt-2 border-2 border-gray-400 rounded-xl">
              <div className="bg-cyan-100 p-4 rounded-l-xl">$</div>
              <input
                type="text"
                className="w-full focus:outline-none ml-5 text-lg rounded-xl"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:w-full mt-4">
            <div>
              <div className="text-gray-500">Mortgage Term</div>
              <div className="flex flex-row mt-2 border-2 border-gray-400 rounded-xl">
                <input
                  type="text"
                  className="w-full focus:outline-none ml-5 text-lg rounded-xl"
                />
                <div className="bg-cyan-100 p-4 rounded-r-xl text-xl font-semibold text-gray-500">
                  years
                </div>
              </div>
            </div>
            <div className="md:ml-6">
              <div className="text-gray-500">Interest Rate</div>
              <div className="flex flex-row mt-2 border-2 border-gray-400 rounded-xl">
                <input
                  type="text"
                  className="w-full focus:outline-none ml-5 text-lg rounded-xl"
                />
                <div className="bg-cyan-100 p-4 rounded-r-xl text-xl font-bold text-gray-500 px-5">
                  %
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-gray-500">Mortgage Type</div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-row p-3 w-full border-gray-400 border-2 rounded-xl">
              <input
                type="radio"
                id="radio1"
                name="MortageType"
                value="Repayment"
                className="size-4 mt-1"
              />
              <h1 className="text-xl ml-8 font-semibold">Repayment</h1>
            </div>
            <div className="flex flex-row p-3 w-full border-gray-400 border-2 rounded-xl mt-2">
              <input
                type="radio"
                id="radio2"
                name="MortageType"
                value="Interest"
                className="size-4 mt-1"
              />
              <h1 className="text-xl ml-8 font-semibold">Interest Only</h1>
            </div>
          </div>
          <div className="mt-8 mb-6">
            <button className="bg-yellow-300 p-4 px-10 rounded-full flex flex-row justify-center items-center hover:bg-yellow-500">
              <img src={cal} alt="" />
              <h1 className="text-xl font-bold ml-2">Calculate Repayments</h1>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-800 md:h-[81vh] flex flex-col justify-center items-center md:rounded-r-2xl md:rounded-bl-[68px]">
          <img src={illustration} alt="" />
          <div className="text-2xl font-semibold text-white p-4">
            Results shown here
          </div>
          <div className="px-10 text-gray-400 text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortageRepayment;
