import React from "react";
import { useNavigate } from "react-router-dom";

import data from "../data.json";

function PriceList() {
  const navigate = useNavigate();

  return (
    <div id="destination">
      <div className="priceList-section bg-gray-100 px-4 py-32 text-gray-700">
        <div className="flex justify-center">
          <h1 className="lg:text-3xl text-2xl font-bold text-center mb-16 lg:mb-10 px-10 lg:px-[20rem] xl:px-[27rem]">
            Find Awesome Destinations in Several Countries from
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 gap-3 lg:gap-4 lg:mx-24 lg:mt-16">
          <div
            onClick={() => {navigate("/Detail/" + data[0].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2"
          >
            <img
              src={data[0].image}
              alt="Indonesia"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-sky-500/75">
              <div className="flex justify-center items-end h-1/3">
                <div>
                  <p className="text-white text-3xl font-bold">
                    {data[0].Country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {navigate("/Detail/" + data[1].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={data[1].image}
              alt="Australia"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-sky-500/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <p className="text-white text-3xl font-bold">
                    {data[1].Country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {navigate("/Detail/" + data[2].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2"
          >
            <img
              src={data[2].image}
              alt="China"
              className="object-cover w-full lg:h-full h-60 rounded-lg "
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-sky-500/75">
              <div className="flex justify-center items-end h-1/3">
                <div>
                  <p className="text-white text-3xl font-bold">
                    {data[2].Country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {navigate("/Detail/" + data[4].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2"
          >
            <img
              src={data[4].image}
              alt="Jepang"
              className="object-cover w-full lg:h-full h-60 rounded-lg "
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-sky-500/75">
              <div className="flex justify-center items-end h-1/3">
                <div>
                  <p className="text-white text-3xl font-bold">
                    {data[4].Country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {navigate("/Detail/" + data[3].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={data[3].image}
              alt="Korea"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-sky-500/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <p className="text-white text-3xl font-bold">
                    {data[3].Country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {navigate("/Detail/" + data[5].id); window.scroll(0, 0);}}
            className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
          >
            <img
              src={data[5].image}
              alt="Thailand"
              className="object-cover w-full lg:h-full h-60 rounded-lg"
            />
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-sky-500/75">
              <div className="flex justify-center items-end h-1/2">
                <div>
                  <p className="text-white text-3xl font-bold">
                    {data[5].Country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
