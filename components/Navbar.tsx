"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "../public/hero/Menu_icon.png";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
  visible: (index: number) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeIn", delay: index * 0.2 },
  }),
};

const listVariantsWork = {
  hidden: {
    x: "100vh",
  },
  visible: (index: number) => ({
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
      delay: index * 0.2,
    },
  }),
};

const arrowVarient = {
  open: {
    rotate: 0,
  },
  close: {
    rotate: 180,
  },
};

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

  const [showIcon, setShowIcon] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const scrollThreshold = 300;

    if (scrollY > scrollThreshold) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="lg:w-full relative">
        <div className="flex justify-between py-6 w-full sm:px-10 px-3 items-center fixed overflow-hidden bg-white z-50">
          <h1 className="lg:text-4xl text-3xl tracking-widest font-neutraface z-auto text-primary">
            <a href="/">ASTUDIO</a>
          </h1>

          <div className="absolute object-contain h-full lg:left-[55%] lg:w-[640px] w-[450px] left-[35%] -z-10">
            <motion.img
              src={"/hero/Rectangle.png"}
              alt="Rectangle"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="hidden lg:block pt-4">START A PROJECT</p>
          <Image
            src={Icon}
            alt="Icon"
            className={`block transition-opacity ${
              showIcon ? "opacity-100" : "lg:opacity-0"
            }`}
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Mobile Nav */}

      <div
        className={`fixed flex flex-col p-12 right-0 border-black
        ${
          !open
            ? "border-t-0 top-0 opacity-0 z-0"
            : `border-t top-20 mt-1 opacity-100 z-50 ${
                showIcon ? "opacity-100" : "lg:opacity-0"
              }`
        } transition-all ease-in-out duration-200 bg-white 
        
        `}
      >
        <ul className="w-full space-y-4 pb-7 pl-4">
          {links.map((item, index) => (
            <motion.li
              key={item.page}
              className="text-lg font-neutraface"
              variants={listVariants}
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              custom={index}
            >
              {item.page === "WORK" ? (
                <span className="flex items-center gap-2">
                  {item.page}

                  <motion.div
                    onClick={() => {
                      toggleWorkItems();
                    }}
                    initial="close"
                    animate={showWorkItems ? "open" : "close"}
                    variants={arrowVarient}
                  >
                    <VscChevronUp />
                  </motion.div>
                </span>
              ) : (
                item.page
              )}
              {item.page === "WORK" && showWorkItems && (
                <ul className="space-y-4 pt-4">
                  {workItems.map((workitem, index) => (
                    <motion.li
                      key={workitem}
                      className="font-neutrafaceTextBook pl-6"
                      variants={listVariantsWork}
                      custom={index}
                    >
                      {workitem}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
        <button
          className="hover:before:bg-redborder-red-500 relative w-full lg:p-4 px-8 p-6 overflow-hidden border border-black bg-transparent text-black shadow-2xl 
              transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#BFE5E6] before:transition-all 
              before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full flex lg:gap-1 
              gap-3 font-neutraface"
        >
          <span className="relative">START A PROJECT</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
