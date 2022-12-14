import React from "react";
import logo from "../assets/logo.png";

import { RiMoneyDollarCircleFill, RiRefund2Fill } from "react-icons/ri";
import { FaGifts, FaStopwatch } from "react-icons/fa";

function Travel() {
  return (
    <div id="about" className="py-5">
      <div className="travel-section grid grid-rows-2 mx-10 lg:flex lg:px-36 lg:justify-items-center lg:items-center text-gray-700 mt-20">
        <div className="description lg:mr-10">
          <h1 className="text-2xl font-bold text-center lg:text-left ">
            Why Everyone Flies
          </h1>
          <p className="text-md lg:text-xl text-justify font-sans w-full">
            Traveling can be a great way to explore new places, experience
            different cultures, and create lasting memories. There are many
            different options for travel, and the best one for you will depend
            on your personal preferences, budget, and destination.
          </p>
        </div>
        <div className="image flex justify-center items-center">
          <img src={logo} alt="logo" className="w-56 lg:w-[40vw]" />
        </div>
      </div>
      <div className="bg-white shadow-xl border border-slate-200/50 lg:mx-36 xl:mx-48 mx-8 mt-12 mb-20 rounded-3xl">
        <div className="lg:flex w-full lg:justify-between p-9 lg:px-12 xl:px-24 grid grid-cols-2 gap-6">
          <div className="hover:scale-125 duration-500 cursor-auto">
            <RiMoneyDollarCircleFill className="w-full h-8 text-yellow-300" />
            <p className="text-md lg:text-lg font-semibold text-gray-500 mt-2 text-center">
              Cheap Price
            </p>
          </div>
          <div className="hover:scale-125 duration-500 cursor-auto">
            <FaStopwatch className="w-full h-8 text-rose-600" />
            <p className="text-md lg:text-lg font-semibold text-gray-500 mt-2 text-center">
              Fast Processing
            </p>
          </div>
          <div className="hover:scale-125 duration-500 cursor-auto">
            <FaGifts className="w-full h-8 text-orange-500" />
            <p className="text-md lg:text-lg font-semibold text-gray-500 mt-2 text-center">
              Many Promos
            </p>
          </div>
          <div className="hover:scale-125 duration-500 cursor-auto">
            <RiRefund2Fill className="w-full h-8 text-green-500" />
            <p className="text-md lg:text-lg font-semibold text-gray-500 mt-2 text-center">
              Cashback 20 %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
