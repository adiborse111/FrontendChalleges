import quotation from "./images/bg-pattern-quotation.svg";
import daniel from "./images/image-daniel.jpg";

const Testimonials = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 w-2/3">
        <div className="flex flex-col relative rounded-xl xl:col-span-2 bg-purple-600">
          <div className="flex flex-row p-4 ml-4">
            <div className="object-contain w-8 h-8 z-10">
              <img src={daniel} alt="img" className="rounded-full" />
            </div>
            <div className="text-white text-xs ml-2 flex flex-col">
              <h1>Daniel Clifford</h1>
              <h2 className="text-xs font-extralight text-gray-50">
                Verified Graduate
              </h2>
            </div>
          </div>
          <div className="ml-8">
            <p className="text-sm text-white font-bold">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </p>
          </div>
          <div className="p-6 ml-2 mb-2">
            <p className="text-xs text-gray-300">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
        </div>
        <div className="w-48 h-48 bg-purple-700 rounded-xl"></div>
        <div className="w-48 h-96 bg-purple-700 rounded-xl xl:row-span-2"></div>
        <div className="w-48 h-48 bg-purple-700 rounded-xl"></div>
        <div className="w-48 h-48 bg-purple-700 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Testimonials;
