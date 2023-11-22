"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CasesTwo = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const textVarients = {
    hidden: {
      y: isSmallScreen ? -50 : -200,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        mass: 0.8,
        damping: 6,
        delay: 0.3,
      },
    },
  };

  const imgVarients = isSmallScreen
    ? {
        hidden: {
          y: 20,
        },
        visible: {
          y: 0,
          transition: { type: "spring", mass: 0.8, damping: 6 },
        },
      }
    : {
        hidden: {
          x: 50,
        },
        visible: {
          x: 0,
          transition: { type: "spring", mass: 0.8, damping: 6 },
        },
      };
  return (
    <div className="w-full pb-20">
      <div className="flex md:flex-row flex-col relative lg:gap-24 md:gap-8 gap-12">
        <motion.div
          className="lg:pl-[172px] md:pl-[102px] md:pr-0 sm:pr-[110px] pr-5  pl-5 w-fit flex flex-col justify-end xl:mx-auto"
          variants={textVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col">
            <h2 className="uppercase text-primary text-lg font-neutraface whitespace-nowrap">
              Video — mancherster
            </h2>
            <p className="text-sm pt-1">Production</p>
          </div>
          <p className="md:max-w-[300px] text-gray-500">
            As a one-stop shop, we combine the creativity and storytelling of an
            ad agency with the technical expertise and execution of a production
            comany. We create brand stories through strategy and market
            research.
          </p>
        </motion.div>
        <div className="relative flex items-end md:pl-0 sm:pl-20 pl-10 md:pt-0 pt-10 ">
          <motion.div
            className="bg-[#BFE5E6] md:w-[90%] sm:w-[70%] s1:w-[60%] w-[55%] md:h-full h-[70%] absolute md:-top-11 s1:-top-2 top-2 right-0 -z-10"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", mass: 0.8, damping: 6 }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/cases/three.png"
            alt="three"
            variants={imgVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <button className="absolute md:left-0 sm:left-20 left-10 bottom-0 fancyButton lg:w-fit lg:p-3 w-12 p-2">
            <IoIosArrowRoundForward size={30} className="relative" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasesTwo;
