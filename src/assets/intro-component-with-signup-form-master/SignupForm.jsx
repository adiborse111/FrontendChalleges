import { useEffect, useState } from "react";
import backGroundImgPc from "./images/bg-intro-desktop.png";
import backgroundImgMob from "./images/bg-intro-mobile.png"

const SignupForm = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [check, setcheck] = useState(true);

  const checkValues = () => {
    if (!fname || !lname || !email || !password) {
      setcheck(false);
    }
    else{
      setcheck(true)
    }
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="lg:h-screen w-full bg-cover bg-center bg-red-400 flex justify-center items-center"
      style={{
        backgroundImage: `url(${width>1024 ? backGroundImgPc : backgroundImgMob})`,
      }}
    >
      <div className="flex lg:flex-row lg:mr-28 flex-col w-full">
        <div className="flex">
          <div className="flex flex-col lg:mb-24 lg:ml-40 lg:w-2/3 pt-6 sm:pt-20 justify-center items-center">
            <h1 className="text-white font-bold lg:text-6xl text-4xl">
              Learn to code by watching others
            </h1>
            <p className="text-white pt-8 w-11/12 text-lg ">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-3/4 lg:mr-8 sm:ml-24 sm:mt-10">
          <div className="bg-blue-800 p-4 mb-4 px-24 rounded-lg flex justify-center items-center shadow-2xl">
            <h1 className="text-white text-sm">
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </h1>
          </div>
          <div className="flex flex-col bg-white mt-4 rounded-lg shadow-2xl">
            <div className="px-8 mt-10">
              <input
                type="text"
                placeholder="First Name"
                className={check ? `p-5 w-full border-2 border-gray-300 rounded-lg` : `p-5 w-full border-2 border-red-500 rounded-lg`}
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
            </div>
            <div className="px-8 mt-4">
              <input
                type="text"
                placeholder="Last Name"
                className={check ? `p-5 w-full border-2 border-gray-300 rounded-lg` : `p-5 w-full border-2 border-red-500 rounded-lg`}
                value={lname}
                onChange={(e) => setlname(e.target.value)}
              />
            </div>
            <div className="px-8 mt-4">
              <input
                type="text"
                placeholder="Email Address"
                className={check ? `p-5 w-full border-2 border-gray-300 rounded-lg` : `p-5 w-full border-2 border-red-500 rounded-lg`}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="px-8 mt-4">
              <input
                type="password"
                placeholder="Password"
                className={check ? `p-5 w-full border-2 border-gray-300 rounded-lg` : `p-5 w-full border-2 border-red-500 rounded-lg`}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="px-8 mt-4 mb-2">
              <button
                className="bg-green-400 text-white px-8 w-full rounded-md py-4 hover:bg-green-600"
                onClick={() => checkValues()}
              >
                CLAIM YOUR FREE TRIAL
              </button>
            </div>
            <div className="text-xs px-16 text-gray-400 font-thin mb-8 flex justify-center items-center">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-red-600 font-bold">Terms and Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
