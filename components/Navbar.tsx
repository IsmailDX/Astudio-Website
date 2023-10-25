"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "../public/hero/Menu_icon.png";
import { VscChevronDown } from "react-icons/vsc";

const sidebar = ["HOME", "SERVICES", "WORK", "CREW", "CONTACT"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="lg:w-[80%] lg:pl-44 lg:px-0 flex justify-between lg:items-end py-6 w-full sm:px-10 px-3 items-center relative">
        <h1 className="text-4xl tracking-widest font-semibold">ASTUDIO</h1>
        <p className="hidden lg:block">START A PROJECT</p>
        <Image
          src={Icon}
          alt="Icon"
          className="block lg:hidden"
          onClick={handleClick}
        />
      </div>
      {!open ? (
        <div
          className={`absolute top-13 right-0 flex flex-col p-12 border-black lg:hidden
        ${!open ? "border-t" : "border-t-0"}`}
        >
          <ul className="w-full space-y-4 pb-7 pl-4">
            {sidebar.map((item) => (
              <li key={item} className="text-lg font-medium">
                {item === "WORK" ? (
                  <span className="flex items-center gap-2">
                    {item} <VscChevronDown />
                  </span>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
          <button className="border-black">Start a project</button>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
