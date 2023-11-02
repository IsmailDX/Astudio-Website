import React from "react";

const Awards = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-row w-full items-center h-[700px] overflow-hidden relative">
        <div className="div-1 overflow-hidden"></div>
        <div className="div-2 absolute right-0 top-0 z-10">
          <img src="/cases/one.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
