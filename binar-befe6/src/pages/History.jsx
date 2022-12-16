import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { MdAirplanemodeActive } from "react-icons/md";
import axios from "axios";
import { TbPlaneInflight } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { WiTime3 } from "react-icons/wi";

function History() {
  const email = JSON.parse(localStorage.getItem("userEmail"));
  const token = localStorage.getItem("token");
  const getHistory = async () => {
    try {
      const res = await axios.get(
        `https://febe6.up.railway.app//api/getHistories/${email}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
    } catch (error) {}
  };

  return (
    <>
      <div className="bg-gray-100 ">
        <Navbar withcroll={false} />
        <div className="h-20"></div>
        <div className=" bg-white drop-shadow-xl w-full h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-sky-700">History Booking</h1>
        </div>
        <div className="  justify-center w-full px-2  lg:grid gap-2 mb-10">
          <div className="bg-white w-full px-2   mt-2 lg:w-[800px] rounded-lg drop-shadow-2xl">
            <div className="flex p-4 gap-1">
              <div>
                <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
              </div>

              <div className="flex justify-between w-screen">
                <p className="font-bold">Pesawat</p>
                <p className="font-bold">One-way</p>
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
                  <p className=" text-[13px] lg:text-[14px]">
                    Kamis, 1 Des 2022
                  </p>
                  <WiTime3 className=" text-[13px] lg:text-[14px]" />
                  <p className=" text-[13px] lg:text-[14px]">06.30 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default History;
