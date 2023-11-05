import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface BoxProps {
  image: string;
  description: string;
}

const Box = ({ image, description }: BoxProps) => {
  return (
    <div
      className="bg-gray-100 flex justify-center items-center h-[150px] max-h-[200px] max-w-full p-9 py-7 
            relative overflow-hidden transition-all before:absolute 
            before:left-0 before:right-0 before:top-[50%] before:h-0 before:w-full before:bg-[#BFE5E6] before:duration-300 after:absolute 
            after:bottom-[50%] after:left-0 after:right-0 after:h-0 after:w-full after:bg-[#BFE5E6] after:duration-300 hover:text-white 
            hover:before:h-2/4 hover:after:h-2/4"
    >
      <div
        className="w-full h-full absolute top-[20%] flex flex-col justify-start z-10 opacity-0 hover:opacity-100 
            transition-opacity duration-300 px-7"
      >
        <h3 className="w-full transition-opacity line-clamp-3">
          {description}
        </h3>
        <button className="transition-opacity p-0 w-fit border-0 flex items-center text-sm font-neutraface gap-2 absolute bottom-12">
          Case Study <BsArrowRight />
        </button>
      </div>

      <img
        src={image}
        alt={`Client ${image + 1}`}
        className="object-contain max-w-full max-h-full opacity-100 hover:opacity-0"
      />
    </div>
  );
};

export default Box;
