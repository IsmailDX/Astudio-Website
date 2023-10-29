import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Cases = () => {
  return (
    <div className="w-full lg:px-[172px] md:px-[102px] mx-auto px-5 py-24">
      <h1 className="font-neutraface text-3xl text-primary pb-11">USE CASES</h1>
      <div className="w-full flex md:flex-row flex-col md:items-end justify-center items-center md:gap-12 gap-6">
        <div className="pb-11">
          <div className="relative">
            <img
              src="/cases/one.png"
              alt="one"
              className="md:max-w-full max-w-[300px]"
            />
            <button className="absolute left-0 bottom-0 fancyButton lg:w-fit lg:p-3 w-12 p-2">
              <IoIosArrowRoundForward size={30} className="relative" />
            </button>
          </div>
          <div className="w-full flex lg:flex-row flex-col justify-between pt-5">
            <h2 className="uppercase text-primary text-lg font-neutraface">
              Pandora — dana wolley zayat
            </h2>
            <p className="text-sm pt-1">Strategy</p>
          </div>
          <div className="max-w-md text-gray-500">
            <p>
              As a one-stop shop, we combine the creativity and storytelling of
              an ad agency with the technical expertise and execution of a
              production comany. We create brand stories through strategy and
              market research.
            </p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              src="/cases/two.png"
              alt="two"
              className="md:max-w-full max-w-[300px]"
            />
            <button className="absolute left-0 bottom-0 fancyButton lg:w-fit lg:p-3 w-12 p-2">
              <IoIosArrowRoundForward size={30} className="relative" />
            </button>
          </div>
          <div className="w-full flex lg:flex-row flex-col justify-between pt-5">
            <h2 className="uppercase text-primary lg:text-lg  font-neutraface">
              palml'azurde
            </h2>
            <p className="text-sm pt-1">Production</p>
          </div>
          <div className="max-w-md text-gray-500">
            <p>
              As a one-stop shop, we combine the creativity and storytelling of
              an ad agency with the technical expertise and execution of a
              production comany. We create brand stories through strategy and
              market research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
