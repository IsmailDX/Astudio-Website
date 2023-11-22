"use client";
import React from "react";
import Countup from "react-countup";

const Awards = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-full bg-red-700"></div>
      <div className="md:flex flex-row w-full items-center overflow-hidden relative hidden">
        <div className="div-1 overflow-hidden lg:p-28 p-20 pl-3">
          <div className="flex flex-col max-w-[100%] pr-3">
            <h1 className="lg:text-[80px] text-[70px] text-primary font-neutraface lg:leading-[103px] leading-[83px] pb-10 max-w-[500px]">
              AWARDS AND RECOGNITION
            </h1>

            <p className="text-lg max-w-xl text-primary">
              Our work has captured 12 awards in the UK, US and Australia,
              including the Lucie Award. For eleven years we’ve been trusted to
              design and produce campaigns for brands from multi-national giants
              including P&G, Swarovski, Cartier, HSBC, Nike, L’AZURDE, Qatar and
              Emirates Airlines.
            </p>
          </div>

          <div className="max-w-[100%] flex flex-row pt-16 gap-6 justify-around lg:pl-0 pl-11">
            <div className="flex flex-col w-fit -space-y-20 items-start">
              <h4 className="lg:text-[20px] text-[15px] text-primary underline whitespace-nowrap">
                WORLDWIDE AWARDS
              </h4>
              <h1 className="lg:text-[200px] text-[150px] text-white font-neutraface">
                <Countup
                  start={0}
                  end={14}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h1>
            </div>

            <div className="flex flex-col w-fit -space-y-20 items-start">
              <h4 className="lg:text-[20px] text-[15px] text-primary underline whitespace-nowrap">
                TRUSTED YEARS
              </h4>
              <h1 className="lg:text-[200px] text-[150px] text-white font-neutraface">
                <Countup
                  start={0}
                  end={14}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h1>
            </div>

            <div className="flex flex-col w-fit -space-y-20 items-start">
              <h4 className="lg:text-[20px] text-[15px] text-primary underline whitespace-nowrap">
                EMPLOYEES
              </h4>
              <h1 className="lg:text-[200px] text-[150px] text-white font-neutraface">
                <Countup
                  start={0}
                  end={50}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h1>
            </div>
          </div>
        </div>
        <div className="div-2 absolute right-0 top-0 z-10">
          <img
            src="/cases/one.png"
            className="w-full h-full object-cover lg:object-right lg:translate-x-40"
          />
        </div>
      </div>

      {/* Mobile Awards */}
      <div className="flex flex-row w-full items-center overflow-hidden relative md:hidden">
        <div className="div-3 overflow-hidden pt-28 w-full">
          <div className="flex flex-col w-full px-3">
            <h1
              className="text-5xl text-primary 
            font-neutraface leading-[53px] pb-10 w-full"
            >
              AWARDS AND RECOGNITION
            </h1>

            <p className="text-lg max-w-xl text-primary">
              Our work has captured 12 awards in the UK, US and Australia,
              including the Lucie Award. For eleven years we’ve been trusted to
              design and produce campaigns for brands from multi-national giants
              including P&G, Swarovski, Cartier, HSBC, Nike, L’AZURDE, Qatar and
              Emirates Airlines.
            </p>
          </div>

          <div className="max-w-[100%] flex flex-row pt-10 gap-6 justify-around px-5">
            <div className="flex flex-col w-fit -space-y-10 items-center">
              <h4 className="text-[11px] text-primary underline whitespace-nowrap line-clamp-2">
                WORLDWIDE AWARDS
              </h4>
              <h1 className="text-[90px] text-white font-neutraface">
                <Countup
                  start={0}
                  end={12}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h1>
            </div>

            <div className="flex flex-col w-fit -space-y-10 items-center">
              <h4 className="text-[11px] text-primary underline whitespace-nowrap">
                TRUSTED YEARS
              </h4>
              <h1 className="text-[90px] text-white font-neutraface">
                <Countup
                  start={0}
                  end={14}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h1>
            </div>

            <div className="flex flex-col w-fit -space-y-10 items-center">
              <h4 className="text-[11px] text-primary underline whitespace-nowrap">
                EMPLOYEES
              </h4>
              <h1 className="text-[90px] text-white font-neutraface">
                <Countup
                  start={0}
                  end={50}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
