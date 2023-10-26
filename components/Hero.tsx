import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex">
      <div className="w-full lg:w-[80%] left-0 top-0 h-screen relative">
        <img
          src={"/hero/ShowReal.png"}
          alt="HeroImg"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute lg:top-[27%] flex lg:flex-row lg:items-end lg:gap-20 lg:p-2 lg:justify-center 
        flex-col items-center gap-20 top-0 justify-end"
        >
          <div>
            <button className="border-white text-white font-neutraface flex items-center gap-1 whitespace-nowrap w-full">
              SEE OUR WORK <IoIosArrowRoundForward size={30} />
            </button>
          </div>
          <div className="w-full">
            <img src={"/hero/A.png"} alt="logo" width={550} height={550} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
