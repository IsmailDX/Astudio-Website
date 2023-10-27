"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "../public/hero/Menu_icon.png";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const links = [
  { page: "HOME" },
  { page: "SERVICES" },
  { page: "WORK" },
  { page: "CREW" },
  { page: "CONTACT" },
];
const workItems = ["PRODUCTION", "DIGITAL", "CREATIVE", "STRATEGY"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [showWorkItems, setShowWorkItems] = useState(false);
  const [workIcon, setWorkIcon] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setWorkIcon(false);
    setShowWorkItems(false);
  };

  const toggleWorkItems = () => {
    setShowWorkItems(!showWorkItems);
    setWorkIcon(!showWorkItems);
  };

  return (
    <>
      <div
        className="lg:w-[80%] lg:pl-44 lg:px-0 flex justify-between lg:items-end py-6
       w-full sm:px-10 px-3 items-center relative overflow-hidden bg-white z-10"
      >
        <h1 className="lg:text-4xl text-3xl tracking-widest font-neutraface z-auto">
          ASTUDIO
        </h1>

        <div className="absolute object-contain h-full lg:left-[55%] lg:w-[550px] w-[450px] left-[35%] -z-10">
          <img src={"/hero/Rectangle.png"} alt="Rectangle" />
        </div>

        <p className="hidden lg:block">START A PROJECT</p>
        <Image
          src={Icon}
          alt="Icon"
          className="block lg:hidden"
          onClick={handleClick}
        />
      </div>

      {/* Mobile Nav */}

      <div
        className={`fixed flex flex-col p-12 right-0 border-black lg:hidden
        ${
          !open
            ? "border-t-0 opacity-0 z-0"
            : "border-t top-13 opacity-100 z-10"
        } transition-all ease-in-out duration-200 bg-white`}
      >
        <ul className="w-full space-y-4 pb-7 pl-4">
          {links.map((item) => (
            <li key={item.page} className="text-lg font-neutraface">
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
                    <li key={workitem} className="font-neutrafaceTextBook pl-6">
                      {workitem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button className="border-black font-neutraface">
          Start a project
        </button>
      </div>
    </>
  );
};

export default Navbar;
