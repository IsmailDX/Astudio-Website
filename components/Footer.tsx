import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#BFE5E6]">
      <div className="w-full mx-auto max-w-[1100px] bg-[#BFE5E6] lg:p-32 p-10 lg:pr-0 flex flex-col">
        <div className="flex flex-col gap-24">
          <h1 className="uppercase text-6xl max-w-2xl font-neutraface text-primary tracking-wide">
            want to develop? Please contact us
          </h1>
          <div className="flex gap-10 md:justify-normal justify-around">
            <button className="text-sm w-40 font-neutraface fancyButtonFooter shadow-none">
              <span className="relative mx-auto">START A PROJECT</span>
            </button>
            <button className="text-sm w-40 font-neutraface fancyButtonFooter shadow-none">
              <span className="relative mx-auto">SEE OUR WORK</span>
            </button>
          </div>

          <div className="w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-0 gap-12">
            <div>
              <ul className="text-sm text-primary">
                <li className="font-neutraface uppercase tracking-widest pb-3">
                  contact us:
                </li>
                <li>web@astudio.ae</li>
                <li>+97144534442 </li>
              </ul>
            </div>
            <div className="max-w-[100px]">
              <ul className="text-sm text-primary">
                <li className="font-neutraface uppercase tracking-widest pb-3">
                  Address:
                </li>
                <li>2607 Cluster M</li>
                <li>Jumeirah Lakes Towers, Dubai</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm text-primary">
                <li className="font-neutraface uppercase tracking-widest pb-3">
                  Follow us:
                </li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm text-primary">
                <li className="font-neutraface uppercase tracking-widest">
                  Home
                </li>
                <li className="font-neutraface uppercase tracking-widest">
                  Services
                </li>
                <li className="font-neutraface uppercase tracking-widest">
                  Work
                </li>
                <li className="font-neutraface uppercase tracking-widest">
                  Crew
                </li>
                <li className="font-neutraface uppercase tracking-widest">
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex justify-end s1:pt-4 s1:justify-center s2:pt-4 s2:justify-center">
              <img
                src="/cases/logo2.png"
                alt="logo2"
                className="lg:pr-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
