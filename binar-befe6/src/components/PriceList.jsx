import React, { useState } from "react";

function PriceList() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-gray-100 mx-auto py-24 text-gray-700">
      <h1 className="text-2xl font-bold text-center">
        Book with a Cheap Price from
      </h1>
      <div className="mt-12 flex justify-center">
        <h5
          onClick={() => setOpenTab(1)}
          className={`${openTab === 1 ? "after:w-full text-gray-800" : "after:w-0 text-gray-400"} duration-500 hover:text-gray-800 text-lg cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[3px] after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full`}
        >
          Jawa
        </h5>
        <h5
          onClick={() => setOpenTab(2)}
          className={`${openTab === 2 ? "after:w-full text-gray-800" : "after:w-0 text-gray-400"} duration-500 hover:text-gray-800 text-lg cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[3px] after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-5`}
        >
          Sumatra
        </h5>
        <h5
          onClick={() => setOpenTab(3)}
          className={`${openTab === 3 ? "after:w-full text-gray-800" : "after:w-0 text-gray-400"} duration-500 hover:text-gray-800 text-lg cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[3px] after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-5`}
        >
          Bali
        </h5>
      </div>
      <div className="mt-6 text-center">
        <div className={openTab === 1 ? "block" : "hidden"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias?
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim
          ullam inventore numquam temporibus dicta!
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          error beatae aliquid totam amet sequi quisquam sed magni sunt eveniet.
        </div>
      </div>
    </div>
  );
}

export default PriceList;
