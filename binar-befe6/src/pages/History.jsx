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

        <div className="bg-white w-full px-2   mt-5 lg:w-[800px] rounded-lg drop-shadow-2xl">
          <div className="flex  p-4 gap-1">
            <div>
              <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
            </div>

            <div className="flex justify-between w-screen">
              <p className="font-bold">Pesawat</p>
              <p className="font-bold">Pulang Pergi</p>
            </div>
          </div>
          <div className="ml-5">
            <p className="font-bold">Order ID : 0001</p>
          </div>
          <div className="flex ml-5 gap-2">
            <p className="font-bold">Jakarta</p>
            <HiOutlineSwitchHorizontal />
            <p className="font-bold">Denpasar</p>
          </div>

          <div className=" ml-5  flex lg:ml-5 gap-2">
            <div className="grid">
              {/* <p className=" text-[13px] lg:text-[14px]">Pulang Pergi</p> */}
              <div className="flex gap-1">
                <p className="font-bold text-[13px] lg:text-[14px]">
                  Quota Penumpang:
                </p>
                <p className=" text-[13px] lg:text-[14px]">1</p>
              </div>

              <div className="flex gap-1">
                <p className="font-bold text-[13px] lg:text-[14px]">
                  Jadwal Berangkat:
                </p>
                <TbPlaneInflight className=" text-[12px] lg:text-[14px]" />
                <p className=" text-[13px] lg:text-[14px]">
                  Sabtu, 27 Nov 2022,
                </p>
                <WiTime3 className=" text-[13px] lg:text-[14px]" />
                <p className=" text-[13px] lg:text-[14px]">06.30 </p>
              </div>

              <div className="flex gap-1">
                <p className="font-bold text-[13px] lg:text-[14px]">
                  Jadwal Kembali:
                </p>
                <TbPlaneInflight className="text-[13px] lg:text-[14px]" />
                <p className=" text-[13px] lg:text-[14px]">
                  Minggu, 30 Nov 2022,
                </p>
                <WiTime3 className=" text-[13px] lg:text-[14px]" />
                <p className=" text-[13px] lg:text-[14px]">13.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full px-2   mt-2 lg:w-[800px] rounded-lg drop-shadow-2xl">
          <div className="flex p-4 gap-1">
            <div>
              <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
            </div>

            <div className="flex justify-between w-screen">
              <p className="font-bold">Pesawat</p>
              <p className="font-bold">Sekali Jalan</p>
            </div>
          </div>
          <div className="ml-5">
            <p className="font-bold">Order ID : 0002</p>
          </div>
          <div className="flex ml-5 gap-2">
            <p className="font-bold">Aceh</p>
            <BsArrowRight />
            <p className="font-bold">Bandung</p>
          </div>

          <div className="gap-1 flex ml-5 lg:gap-2">
            <div className="grid">
              <div className="flex gap-1">
                <p className="font-bold text-[13px] lg:text-[14px]">
                  Quota Penumpang:
                </p>
                <p className=" text-[13px] lg:text-[14px]">2</p>
              </div>

              <div className="flex gap-1">
                <p className="font-bold text-[13px] lg:text-[14px]">
                  Jadwal Berangkat:
                </p>
                <TbPlaneInflight className=" text-[13px] lg:text-[14px]" />
                <p className=" text-[13px] lg:text-[14px]">Kamis, 1 Des 2022</p>
                <WiTime3 className=" text-[13px] lg:text-[14px]" />
                <p className=" text-[13px] lg:text-[14px]">06.30 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
