import "./resultSummary.css";
import red from "./assets/images/icon-reaction.svg";
import yellow from "./assets/images//icon-memory.svg";
import green from "./assets/images/icon-verbal.svg";
import blue from "./assets/images/icon-visual.svg";

const ResultSummary = () => {
  return (
    <div className="flex sm:flex-row justify-center items-center h-screen flex-col">
      <div className="bg-blue-700 w-[50vh] rounded-3xl flex flex-col justify-center items-center">
        <div className="text-gray-300 mt-10 text-lg">
          <h1>Your Result</h1>
        </div>
        <div className="bg-blue-500 rounded-full mt-8 p-4">
          <div className="p-8">
            <h1 className="text-5xl text-white font-bold">76</h1>
            <h3 className="text-gray-300 text-sm ml-2">of 100</h3>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-3xl text-white">Great</h1>
        </div>
        <div className="w-3/5 mb-10">
          <h1 className="text-gray-300 text-center">
            You scored higher than 65% of the people who have taken these tests.
          </h1>
        </div>
      </div>
      <div className="w-[50vh] shadow-xl">
        <div className="ml-6 flex flex-col mr-6">
          <div className="text-xl font-semibold mb-8 mt-6">Summary</div>
          <div className="flex bg-red-100 rounded-lg p-3">
            <img src={red} alt="red" className="px-3" />
            <h1 className="text-red-500">Reaction</h1>
            <h1 className="flex justify-end w-full mr-4">
              80 &nbsp;<span className="text-gray-400">/ 100</span>
            </h1>
          </div>
          <div className="flex bg-yellow-100 rounded-lg p-3 mt-4">
            <img src={yellow} alt="red" className="px-3" />
            <h1 className="text-yellow-500">Memory</h1>
            <h1 className="flex justify-end w-full mr-4">
              92 &nbsp;<span className="text-gray-400">/ 100</span>
            </h1>
          </div>
          <div className="flex bg-green-100 rounded-lg p-3 mt-4">
            <img src={green} alt="red" className="px-3" />
            <h1 className="text-green-500">Verbal</h1>
            <h1 className="flex justify-end w-full mr-4">
              61 &nbsp;<span className="text-gray-400">/ 100</span>
            </h1>
          </div>
          <div className="flex bg-blue-100 rounded-lg p-3 mt-4">
            <img src={blue} alt="red" className="px-3" />
            <h1 className="text-blue-500">Visual</h1>
            <h1 className="flex justify-end w-full mr-4">
              72 &nbsp;<span className="text-gray-400">/ 100</span>
            </h1>
          </div>
          <button className="bg-blue-950 mt-8 mb-10 py-3 rounded-full hover:bg-blue-600">
            <h1 className="text-white">Continue</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
