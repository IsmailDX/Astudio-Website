"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const listVariantsWork = {
  hidden: {
    x: "100vh",
  },
  visible: {
    x: 0,
  },
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

const Hero = () => {
  const [showWorkItems, setShowWorkItems] = useState(false);

  const toggleWorkItems = () => {
    setShowWorkItems(!showWorkItems);
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
            <motion.div
              className="md:mr-auto md:ml-0 md:pl-12"
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="fancyButton">
                <span className="relative">SEE OUR WORK</span>
                <IoIosArrowRoundForward size={30} className="relative" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              className="w-full sm:max-w-[550px] pr-2 md:ml-auto md:mr-0 mr-auto max-w-[450px]"
            >
              <img src={"/hero/A.png"} alt="logo" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}

      <div
        className={`w-[20%] h-screen top-0 right-0 hidden lg:flex flex-col justify-center pl-5`}
      >
        <ul className="w-full space-y-4 pb-7 pl-4">
          {links.map((item, index) => (
            <motion.li
              key={item.page}
              className="text-lg font-neutraface text-primary"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.2 }}
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
                      className="font-neutrafaceTextBook pl-6 text-primary"
                      variants={listVariantsWork}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        mass: 0.4,
                        damping: 8,
                        delay: index * 0.2,
                      }}
                    >
                      {workitem}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
