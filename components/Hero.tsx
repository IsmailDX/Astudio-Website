"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const links = [
  { page: "HOME" },
  { page: "SERVICES" },
  { page: "WORK" },
  { page: "CREW" },
  { page: "CONTACT" },
];
const workItems = ["PRODUCTION", "DIGITAL", "CREATIVE", "STRATEGY"];

const Hero = () => {
  const [showWorkItems, setShowWorkItems] = useState(false);
  const [workIcon, setWorkIcon] = useState(false);

  const toggleWorkItems = () => {
    setShowWorkItems(!showWorkItems);
    setWorkIcon(!showWorkItems);
  };

  return (
    <div className="lg:h-screen h-[80vh] w-full relative flex pt-20">
      <div className="w-full lg:w-[80%] left-0 top-0 lg:h-screen h-[80vh] relative">
        <img
          src={"/hero/ShowReal.png"}
          alt="HeroImg"
          className="w-full lg:h-screen h-[80vh] object-cover"
        />
        <div className="w-full h-fit flex lg:justify-center">
          <div
            className="absolute lg:top-[27%] flex lg:flex-row lg:items-end lg:gap-20 lg:p-2 
          lg:justify-center lg:bottom-auto flex-col items-center gap-24 bottom-0 justify-end lg:w-auto w-full"
          >
            <div className="md:mr-auto md:ml-0 md:pl-12">
              <button className="fancyButton">
                <span className="relative">SEE OUR WORK</span>
                <IoIosArrowRoundForward size={30} className="relative" />
              </button>
            </div>
            <div className="w-full sm:max-w-[550px] pr-2 md:ml-auto md:mr-0 mr-auto max-w-[450px]">
              <img src={"/hero/A.png"} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}

      <div
        className={`w-[20%] h-screen top-0 right-0 hidden lg:flex flex-col justify-center pl-5`}
      >
        <ul className="w-full space-y-4 pb-7 pl-4">
          {links.map((item) => (
            <li
              key={item.page}
              className="text-lg font-neutraface text-primary"
            >
              {item.page === "WORK" ? (
                <span className="flex items-center gap-2">
                  {item.page}
                  {workIcon ? (
                    <VscChevronUp onClick={toggleWorkItems} />
                  ) : (
                    <VscChevronDown onClick={toggleWorkItems} />
                  )}
                </span>
              ) : (
                item.page
              )}
              {item.page === "WORK" && showWorkItems && (
                <ul className="space-y-4 pt-4">
                  {workItems.map((workitem) => (
                    <li
                      key={workitem}
                      className="font-neutrafaceTextBook pl-6 text-primary"
                    >
                      {workitem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
