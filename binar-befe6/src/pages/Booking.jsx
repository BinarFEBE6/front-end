import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";

function Booking() {
  return (
    <div>
      <div className="bg-sky-500 flex justify-between ">
        <p className="ml-[100px] mt-5 font-bold text-white  text-[30px]">
          Search Flight
        </p>
        <AiOutlineClose className="mr-[80px]  mt-6 text-[30px]" />
      </div>
      <div className="  mt-14">
        <p className="ml-[100px] text-[30px] font-bold">
          Hay, Kamu Mau Jalan Jalan Kemana?
        </p>
      </div>

      <div className="   mt-14 ">
        <div className="flex gap-1 ml-[100px]">
          <GiCommercialAirplane className="text-sky-500 mt-5 text-[20px]" />
          <p className="font-bold mt-5">Flight</p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
