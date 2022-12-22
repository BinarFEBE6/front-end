import React from "react";
import { useNavigate } from "react-router-dom";

// import JPG

// data Json
import data from "../data.json";

function PriceList() {
  const navigate = useNavigate();

  return (
    <div className="priceList-section bg-gray-100 px-4 py-24 text-gray-700">
      <h1 className="lg:text-2xl text-3xl font-bold text-center mb-16 px-10 lg:px-0">
        Book with a Cheap Price from
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 gap-3 lg:gap-4 lg:mx-24 lg:mt-16">
        <div
          onClick={() => navigate("/Detail/" + data[0].id)}
          className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2"
        >
          <img
            src={data[0].image}
            alt="Indonesia"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {data[0].Country}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/Detail/" + data[1].id)}
          className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={data[1].image}
            alt="Australia"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-200/25">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {data[1].Country}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/Detail/" + data[2].id)}
          className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2"
        >
          <img
            src={data[2].image}
            alt="China"
            className="object-cover w-full lg:h-full h-60 rounded-lg "
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {data[2].Country}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/Detail/" + data[4].id)}
          className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2"
        >
          <img
            src={data[4].image}
            alt="Korea"
            className="object-cover w-full lg:h-full h-60 rounded-lg "
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {data[4].Country}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/Detail/" + data[3].id)}
          className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={data[3].image}
            alt="Jepang"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {data[3].Country}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/Detail/" + data[5].id)}
          className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={data[5].image}
            alt="Thailand"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">
                  {data[5].Country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
