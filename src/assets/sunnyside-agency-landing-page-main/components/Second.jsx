import transform from "../images/desktop/image-transform.jpg";
import standout from "../images/desktop/image-stand-out.jpg";
import photo from "../images/desktop/image-photography.jpg";
import graphic from "../images/desktop/image-graphic-design.jpg";

const Second = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-1/2 px-40 py-44">
            <h1 className="text-5xl font-black font-serif">
              Transform your brand
            </h1>
            <h4 className="mt-10 text-balance">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </h4>
            <div className="mt-10">
              <button className="border-b-5 border-yellow-200 font-bold px-1 hover:border-yellow-400">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={transform} alt="img" className="w-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse w-full justify-between">
          <div className="flex flex-col w-1/2 px-40 py-44">
            <h1 className="text-5xl font-black font-serif">
              Stand out to the right audience
            </h1>
            <h4 className="mt-10 text-balance">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </h4>
            <div className="mt-10">
              <button className="border-b-5 border-pink-200 font-bold px-1 hover:border-pink-400">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={standout} alt="img" className="w-full" />
          </div>
        </div>

        <div className="flex flex-row-reverse w-full justify-between">
          <div className="absolute w-1/2 -z-10">
            <img src={photo} alt="" className="w-full" />
          </div>
          <div className="flex flex-col w-1/2 px-40 pt-96 justify-center items-center">
            <h1 className="text-3xl font-black font-serif">Photography</h1>
            <h4 className="mt-10 text-balance text-center">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </h4>
          </div>
          <div className="absolute w-1/2 -z-10 left-0">
            <img src={graphic} alt="img" className="w-full" />
          </div>
          <div className="flex flex-col w-1/2 px-40 pt-96 justify-center items-center">
            <h1 className="text-3xl font-black font-serif">Graphic Design</h1>
            <h4 className="mt-10 text-balance text-center">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
