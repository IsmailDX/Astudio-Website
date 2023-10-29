import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CasesTwo = () => {
  return (
    <div className="w-full pb-20">
      <div className="flex md:flex-row flex-col relative lg:gap-24 md:gap-8 gap-12">
        <div className="lg:pl-[172px] md:pl-[102px] mx-auto md:pr-0 sm:pr-[170px] s1:pr-[170px] pr-12  pl-5 w-fit flex flex-col justify-end">
          <div className="flex flex-col">
            <h2 className="uppercase text-primary text-lg font-neutraface whitespace-nowrap">
              Video — mancherster
            </h2>
            <p className="text-sm pt-1">Production</p>
          </div>
          <p className="max-w-[300px] text-gray-500">
            As a one-stop shop, we combine the creativity and storytelling of an
            ad agency with the technical expertise and execution of a production
            comany. We create brand stories through strategy and market
            research.
          </p>
        </div>
        <div className="relative flex items-end md:pl-0 sm:pl-20 pl-10 md:pt-0 pt-10">
          <div className="bg-[#BFE5E6] md:w-[90%] sm:w-[70%] s1:w-[60%] w-[55%] md:h-full h-[70%] absolute md:-top-11 s1:-top-2 top-2 right-0 -z-10"></div>
          <img src="/cases/three.png" alt="three" />
          <button className="absolute md:left-0 sm:left-20 left-10 bottom-0 fancyButton lg:w-fit lg:p-3 w-12 p-2">
            <IoIosArrowRoundForward size={30} className="relative" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasesTwo;
