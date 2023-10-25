"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "../public/hero/Menu_icon.png";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const sidebar = ["HOME", "SERVICES", "WORK", "CREW", "CONTACT"];
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
       w-full sm:px-10 px-3 items-center relative overflow-hidden bg-transparent"
      >
        <h1 className="text-4xl tracking-widest font-semibold">ASTUDIO</h1>
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
        className={`absolute flex flex-col p-12 right-0 border-black lg:hidden
        ${
          !open
            ? "border-t top-13 opacity-100 z-9999"
            : "border-t-0 opacity-0 z-0"
        } transition-all ease-in-out duration-200 bg-white`}
      >
        <ul className="w-full space-y-4 pb-7 pl-4">
          {sidebar.map((item) => (
            <li key={item} className="text-lg font-medium">
              {item === "WORK" ? (
                <span className="flex items-center gap-2">
                  {item}
                  {workIcon ? (
                    <VscChevronUp onClick={toggleWorkItems} />
                  ) : (
                    <VscChevronDown onClick={toggleWorkItems} />
                  )}
                </span>
              ) : (
                item
              )}
              {item === "WORK" && showWorkItems && (
                <ul className="space-y-4 pt-4">
                  {workItems.map((workitem) => (
                    <li key={workitem} className="font-light pl-6">
                      {workitem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button className="border-black">Start a project</button>
      </div>
    </>
  );
};

export default Navbar;
