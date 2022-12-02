import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { Empty } from "antd";
import { TbPlaneInflight } from "react-icons/tb";
import "swiper/css";
import { Button } from "antd";
import "swiper/css/pagination";
import { AiOutlineArrowRight, AiOutlineClockCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaPlane, FaPlaneSlash } from "react-icons/fa";
import { Navigation } from "swiper";
function Schedule() {
  const [Skejul, setSkejul] = useState(false);
  const jadwal = () => {
    setSkejul(true);
  };
  return (
    <>
      <Navbar withcroll={false} />
      <div className="schedule w-full h-full lg:w-full  flex justify-center items-center bg-slate-100 flex-col ">
        <div className="class bg bg-sky-700 w-full h-[35vh] lg:h-[40vh] rounded-b-[50px] lg:rounded-b-[100px] mb-5 flex items-center flex-col justify-center shadow-xl">
          <h1 className=" text-2xl lg:text-4xl text-center text-white font-bold mt-7 tracking-wider uppercase">
            Choose Your Planning Schedule
          </h1>
        </div>
        <div className="wrapper w-[90vw] h-36 lg:w-[76vw] bg-white shadow-xl rounded-md">
          <div className="schedule-wrapping  p-2 ">
            <div className="location flex flex-row space-x-5 ">
              <p className="text-xl text-gray-900 font-semibold">Jakarta</p>
              <FaPlane size={20} className="mt-2 text-gray-900" />
              <p className="text-xl text-gray-900 font-semibold">Jakarta</p>
            </div>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={10}
              breakpoints={{
                425: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },

                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                1440: {
                  slidesPerView: 9,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper  px-2 lg:px-0 "
            >
              <SwiperSlide>
                <button
                  className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400"
                  onClick={jadwal}
                >
                  Ada Skejul
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button
                  className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400"
                  onClick={() => setSkejul(false)}
                >
                  Ga Ada Skejul
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="box w-28 h-16 bg-gray-500 rounded-md border-x-2 border-gray-400">
                  1
                </button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className={`flight bg-transparent w-[90vw] h-[70vh]  mt-7 lg:w-[80vw] rounded-md  ${
            Skejul ? "" : " flex justify-center"
          }`}
        >
          {Skejul ? (
            <div className="class flex justify-center flex-col items-center">
              <div className="flight w-[95%] rounded-md h-28 bg-white shadow-lg mt-3">
                <div className="maskapai flex flex-row justify-between mx-4 mt-2">
                  <div>
                    <div className="Kapal flex flex-row space-x-3">
                      <TbPlaneInflight />
                      <h1>Aeru Asia</h1>
                    </div>

                    <div className="tujuan flex-row flex space-x-2 mt-2">
                      <h2 className="text-sm">Jakarta</h2>
                      <AiOutlineArrowRight />
                      <h2 className="text-sm">Jakarta</h2>
                    </div>

                    <div className="time flex flex-row items-center space-x-2 mt-2">
                      <AiOutlineClockCircle size={20} />
                      <h2>Depart 4.20</h2>
                    </div>
                  </div>

                  <div className="class flex flex-col">
                    <h1 className="text-end">Ekonomi</h1>
                    <h1>Rp. 2.000.000</h1>
                    <button className="w-full rounded-lg p-2 text-white bg-sky-500">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>

              <div className="flight w-[95%] rounded-md h-28 bg-white shadow-lg mt-3">
                <div className="maskapai flex flex-row justify-between mx-4 mt-2">
                  <div>
                    <div className="Kapal flex flex-row space-x-3">
                      <TbPlaneInflight />
                      <h1>Aeru Asia</h1>
                    </div>
                    <div className="tujuan flex-row flex space-x-2 mt-2">
                      <h2 className="text-sm">Jakarta</h2>
                      <AiOutlineArrowRight />
                      <h2 className="text-sm">Jakarta</h2>
                    </div>

                    <div className="time flex flex-row items-center space-x-2 mt-2">
                      <AiOutlineClockCircle size={20} />
                      <h2>Depart 4.20</h2>
                    </div>
                  </div>

                  <div className="class flex flex-col">
                    <h1 className="text-end">Ekonomi</h1>
                    <h1>Rp. 2.000.000</h1>
                    <button className="w-full rounded-lg p-2 text-white bg-sky-500">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>

              <div className="flight w-[95%] rounded-md h-28 bg-white shadow-lg mt-3">
                <div className="maskapai flex flex-row justify-between mx-4 mt-2">
                  <div>
                    <div className="Kapal flex flex-row space-x-3">
                      <TbPlaneInflight />
                      <h1>Aeru Asia</h1>
                    </div>
                    <div className="tujuan flex-row flex space-x-2 mt-2">
                      <h2 className="text-sm">Jakarta</h2>
                      <AiOutlineArrowRight />
                      <h2 className="text-sm">Jakarta</h2>
                    </div>

                    <div className="time flex flex-row items-center space-x-2 mt-2">
                      <AiOutlineClockCircle size={20} />
                      <h2>Depart 4.20</h2>
                    </div>
                  </div>

                  <div className="class flex flex-col">
                    <h1 className="text-end">Ekonomi</h1>
                    <h1>Rp. 2.000.000</h1>
                    <button className="w-full rounded-lg p-2 text-white bg-sky-500">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty flex justify-center items-center flex-col w-[95%] bg-white h-[70%] rounded-md shadow-lg">
              <FaPlaneSlash size={50} />
              <h1 className="text-4xl">No Schedule</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
