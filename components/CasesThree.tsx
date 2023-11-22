"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CasesThree = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

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
        delay: 0.3,
        duration: 0.3,
      },
    },
  };

  const imgVarients = isSmallScreen
    ? {
        hidden: {
          y: -70,
        },
        visible: {
          y: 0,
        },
      }
    : {
        hidden: {
          x: 50,
        },
        visible: {
          x: 0,
        },
      };

  return (
    <div className="w-full mx-auto flex justify-center px-5 md:py-10 py-32">
      <div className="w-fit flex md:flex-row flex-col lg:gap-12 md:gap-5 relative justify-center">
        <div className="w-fit relative">
          <div className="relative w-fit">
            <div className="w-full h-full max-w-[85%] max-h-[85%] bg-[#BFE5E6] absolute -z-10"></div>
            <motion.img
              src="/cases/four.png"
              alt="four"
              className="pl-14 pt-16 max-h-[600px]"
              variants={imgVarients}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ type: "spring", mass: 0.8, damping: 6, delay: 0.3 }}
            />
            <motion.button
              className="absolute left-14 bottom-0 fancyButton lg:w-fit lg:p-3 w-12 p-2"
              variants={buttonVarients}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <IoIosArrowRoundForward size={30} className="relative" />
            </motion.button>
          </div>
          <motion.div
            variants={textVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full flex lg:flex-row flex-col justify-between pt-5 pl-16">
              <h2 className="uppercase text-primary text-lg font-neutraface">
                mall of egypt
              </h2>
              <p className="text-sm pt-1">Creative</p>
            </div>
            <div className="max-w-md text-gray-500 pl-16">
              <p>
                As a one-stop shop, we combine the creativity and storytelling
                of an ad agency with the technical expertise and execution of a
                production comany. We create brand stories through strategy and
                market research.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-fit relative">
          <div className="relative w-fit">
            <div
              className="w-full h-full max-w-[80%] lg:max-h-[77%] max-h-[70%] bg-[#BFE5E6] absolute sm:left-[20%] 
            s1:left-[19%] s2:left-[15%] lg:top-[15%] md:top-[20%] sm:top-[14%] s1:top-[18%] s2:top-[25%]  -z-10"
            ></div>
            <motion.img
              src="/cases/five.png"
              alt="five"
              className="pt-44 max-h-[800px] pr-16"
              variants={imgVarients}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ type: "spring", mass: 0.8, damping: 6, delay: 0.5 }}
            />
            <motion.button
              className="absolute left-0 bottom-0 fancyButton lg:w-fit lg:p-3 w-12 p-2"
              variants={buttonVarients}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <IoIosArrowRoundForward size={30} className="relative" />
            </motion.button>
          </div>
          <motion.div
            variants={textVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-[492px]  flex lg:flex-row flex-col justify-between pt-5">
              <h2 className="uppercase text-primary text-lg font-neutraface">
                jewellery show
              </h2>
              <p className="text-sm pt-1">Production</p>
            </div>
            <div className="max-w-md text-gray-500">
              <p>
                As a one-stop shop, we combine the creativity and storytelling
                of an ad agency with the technical expertise and execution of a
                production comany. We create brand stories through strategy and
                market research.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CasesThree;
