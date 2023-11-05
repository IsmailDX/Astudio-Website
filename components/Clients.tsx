import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Box } from "@/components";

const Clients = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto pb-28">
      <h1 className="text-2xl font-neutraface pb-16 pt-28 pl-10">CLIENTS</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-10">
        <Box
          image={"/brands/3.png"}
          description={
            "Our work has captured 12 awards in the UK, US and Australia. "
          }
        />
        <Box
          image={"/brands/4.png"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <Box
          image={"/brands/7.png"}
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
          }
        />
        <Box
          image={"/brands/10.png"}
          description={"Ut enim ad minima veniam, quis nostrum"}
        />
        <Box
          image={"/brands/6.png"}
          description={
            "Quis autem vel eum iure reprehenderit qui in ea voluptate"
          }
        />
        <Box
          image={"/brands/8.png"}
          description={
            "Vero eos et accusamus et iusto odio dignissimos ducimus qui"
          }
        />
        <Box
          image={"/brands/9.png"}
          description={"Nemo enim ipsam voluptatem quia voluptas sit"}
        />
        <Box
          image={"/brands/5.png"}
          description={
            "Quis autem vel eum iure reprehenderit qui in ea voluptate"
          }
        />
        <Box
          image={"/brands/4.png"}
          description={
            "Our work has captured 12 awards in the UK, US and Australia."
          }
        />
      </div>
    </div>
  );
};

export default Clients;
