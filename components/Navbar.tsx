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
        <h1 className="text-4xl tracking-widest font-neutraface">ASTUDIO</h1>
        <p className="hidden lg:block">START A PROJECT</p>
        <Image
          src={Icon}
          alt="Icon"
          className="block lg:hidden"
          onClick={handleClick}
        />
      </div>

      {/* Desktop Nav */}

      <div
        className={`fixed w-[20%] h-screen top-0 right-0 hidden lg:flex flex-col justify-center pl-5 ${
          !open ? "z-10" : "z-0"
        }`}
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
