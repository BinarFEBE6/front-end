import React from "react";

// import JPG
import Indonesia from "../assets/Indonesia.jpg";
import Australia from "../assets/Australia.jpg";
import China from "../assets/China.jpg";
import Jepang from "../assets/Jepang.jpg";
import Korea from "../assets/Korea.jpg";
import Thailand from "../assets/Thailand.jpg";

function PriceList() {
  return (
    <div className="priceList-section bg-gray-100 mx-auto py-24 text-gray-700">
      <h1 className="lg:text-2xl text-3xl font-bold text-center px-10 lg:px-0">
        Book with a Cheap Price from
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 gap-4 lg:mx-24 lg:mt-16">
        <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
          <img
            src={Indonesia}
            alt="Indonesia"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
          <img
            src={Australia}
            alt="Australia"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-200/25">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">Australia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
          <img
            src={China}
            alt="China"
            className="object-cover w-full lg:h-full h-60 rounded-lg "
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">China</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden lg:row-span-2">
          <img
            src={Jepang}
            alt="Jepang"
            className="object-cover w-full lg:h-full h-60 rounded-lg "
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">Jepang</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
          <img
            src={Korea}
            alt="Korea"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">South Korea</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-full inline-block cursor-pointer relative rounded-lg overflow-hidden">
          <img
            src={Thailand}
            alt="Thailand"
            className="object-cover w-full lg:h-full h-60 rounded-lg"
          />
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:bg-gray-400/75">
            <div className="flex justify-center items-end h-3/4 text-center">
              <div>
                <p className="text-white text-xs md:text-sm font-bold">Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
