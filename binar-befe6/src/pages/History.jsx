import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { MdAirplanemodeActive } from "react-icons/md";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { TbPlaneInflight } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";

function History() {
  return (
    <div className="bg-slate-200 ">
      <Navbar withcroll={false} />
      <div className="h-20"></div>
      <div className="  justify-center w-full px-2  lg:grid gap-2 mb-10">
        <div className="bg-white w-full h-[80px] mt-5 rounded-lg lg:w-[800px] lg:h-[100px] ">
          <div className=" h-[100px] flex items-center justify-center ">
            <p className="text-2xl lg:text-4xl lg:mt-5 ">Riwayat Pesanan </p>
          </div>
        </div>

        <div className="bg-white h-[180px] w-full px-2   mt-5 lg:w-[800px] rounded-lg drop-shadow-2xl">
          <div className="flex p-4 gap-2">
            <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
            <p className="font-bold">Pesawat</p>
          </div>
          <div className="ml-5">
            <p>Order ID :</p>
          </div>
          <div className="flex ml-5 gap-2">
            <p className="font-bold">Jakarta</p>
            <HiOutlineSwitchHorizontal />
            <p className="font-bold">Denpasar</p>
          </div>

          <div className=" ml-3 gap-1 flex lg:ml-5 lg:gap-2">
            <p className="text-[9px] lg:text-[14px]">
              Pulang Pergi - 2 Penumpang |
            </p>
            <TbPlaneInflight className=" text-[8px] lg:text-[14px]" />
            <p className="text-[8px] lg:text-[14px]">Sabtu, 27 Nov 2022</p>
            <WiTime3 className="text-[8px] lg:text-[14px]" />
            <p className="text-[8px] lg:text-[14px]">06.30 | </p>
            <TbPlaneInflight className="text-[8px] lg:text-[14px]" />
            <p className="text-[8px] lg:text-[14px]">Minggu, 30 Nov 2022</p>
            <WiTime3 className="text-[8px] lg:text-[14px]" />
            <p className="text-[8px] lg:text-[14px]">13.00</p>
          </div>
        </div>

        <div className="bg-white h-[180px] w-full px-2   mt-2 lg:w-[800px] rounded-lg drop-shadow-2xl">
          <div className="flex p-4 gap-2">
            <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
            <p className="font-bold">Pesawat</p>
          </div>
          <div className="ml-5">
            <p>Order ID :</p>
          </div>
          <div className="flex ml-5 gap-2">
            <p className="font-bold">Aceh</p>
            <BsArrowRight />
            <p className="font-bold">Bandung</p>
          </div>

          <div className="gap-1 flex ml-5 lg:gap-2">
            <p className="text-[11px] lg:text-[14px]">
              Sekali Jalan - 2 Penumpang
            </p>
            <TbPlaneInflight className="text-[11px] lg:text-[14px]" />
            <p className="text-[11px] lg:text-[14px]">Kamis, 1 Des 2022</p>
            <WiTime3 className="text-[11px] lg:text-[14px]" />
            <p className="text-[11px] lg:text-[14px]">06.30 </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
