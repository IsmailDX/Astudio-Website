"use client";
import { easeInOut, motion } from "framer-motion";
import React from "react";

const textVarient = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

const Goal = () => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden md:pb-0 sm:pb-28 s1:pb-40 pb-60">
      <div
        className="absolute lg:left-0 bottom-0 -z-10 md:-left-16 sm:max-w-[313px] s1:max-w-[220px] 
      s2:max-w-[150px] max-w-[10px] left-0 md:pb-0 sm:pb-28 s1:pb-40 pb-60"
      >
        <motion.img
          src="/goal/Vector.png"
          alt="Vector"
          initial={{ x: 350, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </div>
      <div
        className="absolute object-contain h-full lg:left-[63%] lg:w-[640px] w-[450px] sm:left-[55%] left-[65%] 
      -z-10 md:pb-0 sm:pb-28 s1:pb-40 pb-60"
      >
        <motion.img
          src="/goal/Rectangle116.png"
          alt="Rectangle"
          initial={{ x: "-100vh", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="lg:pl-[172px] md:pl-[102px] lg:w-[1010px] w-full relative flex flex-col items-end md:items-start">
        <div
          className="font-neutraface lg:text-7xl sm:text-6xl text-4xl tracking-wider pt-36 pb-20 whitespace-pre-wrap 
        lg:pr-28 sm:pr-30 pr-30 px-3"
        >
          <motion.h1
            className="text-primary"
            variants={textVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            OUR MISSION IS TO MAKE EACH PRODUCT BETTER.
          </motion.h1>
        </div>

        <div className="sm:max-w-[550px] s1:max-w-[400px] s2:max-w-[280px] container z-0">
          <motion.img
            src="/goal/Rectangle25.png"
            alt="rectangle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="w-full">
          <motion.p
            className="md:text-xl text-lg text-primary bg-white absolute z-10 
          lg:bottom-32 right-0 md:bottom-24 sm:-bottom-20  s1:-bottom-32 
          s2:-bottom-52 pr-[7px] md:pr-5 md:max-w-[370px] sm:max-w-[300px] s1:max-w-[280px] max-w-[250px] p-7 rounded-md"
            variants={textVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            As a one-stop digital content studio, we combine the creativity and
            storytelling of an ad agency with the technical expertise and
            execution of a photo and video production house.
          </motion.p>
          <motion.a
            href="/"
            className="underline absolute lg:right-36 lg:bottom-20 md:right-36 md:bottom-12 sm:right-44 sm:-bottom-28 
            s1:right-36 sm:pr-0 s1:pr-5 s1:-bottom-40
            s2:right-32 s2:pr-1 s2:-bottom-60 hover:text-[#BFE5E6] transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            READ MORE
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Goal;
