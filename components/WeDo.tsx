"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { text } from "stream/consumers";

const WeDo = () => {
  const textVarients = {
    hidden: {
      opacity: 0,
      x: -70,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const buttonVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full mx-auto py-32 lg:pl-[18%] pl-5 relative">
      <h2 className="font-neutraface text-2xl pb-16 md:text-primary text-[#BFE5E6]">
        WHAT WE DO
      </h2>
      <div className="md:flex w-full md:justify-between lg:gap-16 md:gap-24">
        <div className="flex flex-col gap-10 max-w-[50%] justify-between z-10">
          <motion.div
            className="w-auto"
            variants={textVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="sm:text-6xl s1:text-4xl s2:text-4xl font-neutraface tracking-widest text-[#BFE5E6] pb-7">
              STRATEGY
            </h1>
            <p className="w-[340px] font-neutrafaceTextBook md:text-gray-500 text-gray-300">
              In this stage, we translate the strategic basis of the project
              into visual design. The aim is to create an impressive experience
              in the interaction between the brand and the user
            </p>
          </motion.div>
          <motion.div
            className="w-auto"
            variants={textVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="sm:text-6xl s1:text-4xl s2:text-4xl font-neutraface tracking-widest md:text-primary text-[#BFE5E6] pb-7">
              CREATIVE
            </h1>
            <p className="w-[340px] font-neutrafaceTextBook md:text-gray-500 text-gray-300">
              The first people you’ll meet are our business, UX and technology
              experts. Together you'll discuss ideas and opportunities, and then
              we'll deliver blueprints for the best solution.
            </p>
          </motion.div>
          <motion.div
            className="w-auto"
            variants={textVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="sm:text-6xl s1:text-4xl s2:text-4xl font-neutraface tracking-widest md:text-primary text-[#BFE5E6] pb-7">
              PRODUCTION
            </h1>
            <p className="w-[340px] font-neutrafaceTextBook md:text-gray-500 text-gray-300">
              We combine the creativity and storytelling of an ad agency . We
              control the quality and concept from beginning to end,
              guaranteeing the conceptual integrity and production quality.
            </p>
          </motion.div>
          <motion.div
            className="w-auto"
            variants={textVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="sm:text-6xl s1:text-4xl s2:text-4xl font-neutraface tracking-widest md:text-primary text-[#BFE5E6] pb-7">
              DIGITAL
            </h1>
            <p className="w-[340px] font-neutrafaceTextBook md:text-gray-500 text-gray-300">
              We identify and create digital products and services that create
              revenue channels and help brands thrive in the new economy.
            </p>
          </motion.div>
        </div>

        <div className="md:relative md:z-0 absolute top-0 left-0 -z-10 w-auto md:h-auto h-full">
          <div className="relative h-full">
            <img src="/cases/six.png" className="w-auto h-full object-cover" />
            <div className="absolute inset-0 md:bg-transparent bg-black/50"></div>
            <motion.button
              className="absolute md:left-0 sm:right-0 s1:right-0 s2:right-0 bottom-0 fancyButton w-fit p-3 z-10 md:opacity-100 opacity-0"
              variants={buttonVarients}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <IoIosArrowRoundForward size={40} className="relative" />
            </motion.button>
          </div>
        </div>
      </div>
      <button className="absolute md:left-0 sm:right-0 s1:right-0 s2:right-0 bottom-0 fancyButton w-fit p-3 z-10 md:opacity-0 opacity-100">
        <IoIosArrowRoundForward size={40} className="relative" />
      </button>
    </div>
  );
};

export default WeDo;
