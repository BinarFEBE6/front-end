import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import "swiper/css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  AiFillSchedule,
  AiOutlineArrowRight,
  AiOutlineClockCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
import { TbPlaneInflight } from "react-icons/tb";
import { BsPersonPlusFill } from "react-icons/bs";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaPlane, FaPlaneSlash } from "react-icons/fa";

import { Steps } from "antd";

function Schedule() {
  const [Skejul, setSkejul] = useState(false);
  const jadwal = () => {
    setSkejul(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar withcroll={false} />

      <div className="bg-gray-100 pt-28 w-full">
        <div className="lg:px-48 px-5 pb-10">
          <Steps
            responsive={false}
            items={[
              {
                title: <h1 className="text-blue-500 lg:block hidden">Schedule</h1>,
                status: "process",
                icon: <AiFillSchedule className="text-3xl text-blue-500" />,
              },
              {
                title: <h1 className="text-blue-300 lg:block hidden">Guest Details</h1>,
                status: "wait",
                icon: <BsPersonPlusFill className="text-3xl text-blue-300" />,
              },
              {
                title: <h1 className="text-blue-300 lg:block hidden">Choose Seat</h1>,
                status: "wait",
                icon: (
                  <MdAirlineSeatReclineExtra className="text-3xl text-blue-300" />
                ),
              },
              {
                title: <h1 className="text-blue-300 lg:block hidden">Done</h1>,
                status: "wait",
                icon: <AiFillCheckCircle className="text-3xl text-blue-300" />,
              },
            ]}
          />
        </div>
      </div>

      <div className="schedule w-full h-full lg:w-full flex justify-center items-center flex-col">
        <div className="class bg bg-white w-full h-[35vh] lg:h-[40vh] rounded-b-[50px] lg:rounded-b-[100px] mb-5 flex items-center flex-col justify-center shadow-xl">
          <h1 className=" text-2xl lg:text-4xl text-center text-sky-700 font-bold mt-7 tracking-wider uppercase">
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
                    <button
                      onClick={() => navigate(`/guestDetails`)}
                      className="w-full rounded-lg p-2 text-white bg-sky-500"
                    >
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
