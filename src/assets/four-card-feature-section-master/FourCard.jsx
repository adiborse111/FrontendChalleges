import sup from "./images/icon-supervisor.svg";
import cal from "./images/icon-calculator.svg";
import ka from "./images/icon-karma.svg";
import tb from "./images/icon-team-builder.svg";
import { useEffect, useState } from "react";

const FourCard = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width > 600) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="mt-14 font-light text-4xl text-gray-600">
          Reliable, efficient delivery
        </div>
        <div className="mt-2 font-medium text-4xl text-gray-700">
          Powered by Technology
        </div>
        <div className="text-center size-1/3 mt-6 font-light text-gray-400">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </div>
        <div className="w-screen flex flex-row items-start ml-10">
          <div className="shadow border border-t-4 border-t-cyan-400 rounded-lg w-80 mt-32 ml-60">
            <h1 className="font-bold text-xl p-2 mt-4 ml-4">Supervisor</h1>
            <p className="w-64 text-sm font-light text-gray-400 ml-6">
              Monitors activity to identify project roadblocks
            </p>
            <div className="w-full flex justify-end items-end p-6">
              <img src={sup} alt="supervise" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="shadow border border-t-4 border-t-red-600 rounded-lg w-80 mt-6 ml-8">
              <h1 className="font-bold text-xl p-2 mt-4 ml-4">Team Builder</h1>
              <p className="w-64 text-sm font-light text-gray-400 ml-6">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <div className="w-full flex justify-end items-end p-6">
                <img src={tb} alt="supervise" />
              </div>
            </div>
            <div className="shadow border border-t-4 border-t-yellow-400 rounded-lg w-80 mt-6 ml-8">
              <h1 className="font-bold text-xl p-2 mt-4 ml-4">Karma</h1>
              <p className="w-64 text-sm font-light text-gray-400 ml-6">
                Regularly evaluates our talent to ensure quality
              </p>
              <div className="w-full flex justify-end items-end p-6">
                <img src={ka} alt="supervise" />
              </div>
            </div>
          </div>
          <div className="shadow border border-t-4 border-t-blue-500 rounded-lg w-80 mt-32 ml-8">
            <h1 className="font-bold text-xl p-2 mt-4 ml-4">Calculator</h1>
            <p className="w-64 text-sm font-light text-gray-400 ml-6">
              Uses data from past projects to provide better delivery estimates
            </p>
            <div className="w-full flex justify-end items-end p-6">
              <img src={cal} alt="supervise" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center text-wrap">
      <div className="mt-14 font-light text-4xl text-gray-600">
        Reliable, efficient delivery
      </div>
      <div className="mt-2 font-medium text-4xl text-gray-700">
        Powered by Technology
      </div>
      <div className="text-center text-lg mt-6 w-96 font-light text-gray-400">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </div>
      <div className="shadow border border-t-4 border-t-cyan-400 rounded-lg mt-20 ml-8">
        <h1 className="font-bold text-xl p-2 mt-4 ml-4">Supervisor</h1>
        <p className="w-64 text-sm font-light text-gray-400 ml-6">
          Monitors activity to identify project roadblocks
        </p>
        <div className="w-full flex justify-end items-end p-6">
          <img src={sup} alt="supervise" />
        </div>
      </div>
      <div className="shadow border border-t-4 border-t-red-600 rounded-lg mt-6 ml-8">
        <h1 className="font-bold text-xl p-2 mt-4 ml-4">Team Builder</h1>
        <p className="w-64 text-sm font-light text-gray-400 ml-6">
          Scans our talent network to create the optimal team for your project
        </p>
        <div className="w-full flex justify-end items-end p-6">
          <img src={tb} alt="supervise" />
        </div>
      </div>
      <div className="shadow border border-t-4 border-t-yellow-400 rounded-lg mt-6 ml-8">
        <h1 className="font-bold text-xl p-2 mt-4 ml-4">Karma</h1>
        <p className="w-64 text-sm font-light text-gray-400 ml-6">
          Regularly evaluates our talent to ensure quality
        </p>
        <div className="w-full flex justify-end items-end p-6">
          <img src={ka} alt="supervise" />
        </div>
      </div>
      <div className="shadow border border-t-4 border-t-blue-500 rounded-lg mt-6 ml-8">
        <h1 className="font-bold text-xl p-2 mt-4 ml-4">Calculator</h1>
        <p className="w-64 text-sm font-light text-gray-400 ml-6">
          Uses data from past projects to provide better delivery estimates
        </p>
        <div className="w-full flex justify-end items-end p-6">
          <img src={cal} alt="supervise" />
        </div>
      </div>
    </div>
  );
};

export default FourCard;
