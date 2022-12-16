import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import {
  MdDateRange,
  MdAttachMoney,
  MdAirlineSeatReclineExtra,
} from "react-icons/md";
import { AiFillSchedule, AiFillCheckCircle } from "react-icons/ai";
import { TbPlaneInflight } from "react-icons/tb";
import { BsPersonPlusFill } from "react-icons/bs";
import { IoIosAirplane } from "react-icons/io";
import { FaPlaneSlash, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

import axios from "axios";

import { Steps } from "antd";

function Schedule() {
  const [Skejul, setSkejul] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const jadwal = (value) => {
    localStorage.setItem("scheduleId", value);
    navigate("/guestDetails")
  };
  
  const depart = localStorage.getItem("depart");
 
  const arrival = localStorage.getItem("arival");
  const navigate = useNavigate();
  const values = {
    departureAiport: depart,
    arrivalAirport: arrival,
  };
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const getSchedule = async () => {
    try {
      const res = await axios.post(
        "https://febe6.up.railway.app/api/getSchedule",
        values
      );
      console.log(res.data.data);
      setSchedule(res.data.data);
      return res;
    } catch (error) {}
  };
  useEffect(() => {
    getSchedule();
  }, []);
  
  return (
    <>
      <Navbar withcroll={false} />

      <div className="bg-gray-100 pt-28 w-full">
        <div className="lg:px-48 px-5 pb-10">
          <Steps
            responsive={false}
            items={[
              {
                title: (
                  <h1 className="text-blue-500 lg:block hidden">Schedule</h1>
                ),
                status: "process",
                icon: <AiFillSchedule className="text-3xl text-blue-500" />,
              },
              {
                title: (
                  <h1 className="text-blue-300 lg:block hidden">
                    Guest Details
                  </h1>
                ),
                status: "wait",
                icon: <BsPersonPlusFill className="text-3xl text-blue-300" />,
              },
              {
                title: (
                  <h1 className="text-blue-300 lg:block hidden">Choose Seat</h1>
                ),
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

      <div className="schedule w-full h-fit lg:h-fit lg:w-full pb-11  flex items-center bg-slate-100 flex-col ">
        {/* <div className="class bg bg-white w-full h-[20vh] lg:h-[40vh] rounded-b-[50px] lg:rounded-b-[100px] mb-5 flex items-center flex-col justify-center shadow-xl">
          <h1 className=" text-2xl lg:text-4xl text-center text-gray-600 font-bold mt-7 tracking-wider uppercase">
            Choose Your Planning Schedule
          </h1>
        </div> */}
        <div className="wrapper w-[90vw] p-3 lg:w-[76vw] bg-white shadow-xl rounded-md flex justify-center items-center">
          <div className="location flex flex-row  items-center justify-center mt-3  gap-3">
            <p className="text-xl text-gray-600 font-semibold ">{depart}</p>
            <IoIosAirplane className="text-yellow-300  mb-3" size={20} />
            <p className="text-xl text-gray-600 font-semibold">{arrival}</p>
          </div>
        </div>
        <div
          className={`flight bg-transparent w-[90vw]   lg:w-[80vw] rounded-md  ${
            Skejul ? "" : " flex justify-center"
          }`}
        >
          {schedule.length ? (
            <div className="class flex justify-center flex-col items-center">
              {schedule &&
                schedule.map((item) => {
                  return (
                    <div className="flight w-[95%] rounded-md flex p-2 bg-white shadow-lg mt-3">
                      <div className="maskapai flex flex-row justify-between mx-4 mt-2">
                        <div>
                          <div className="Kapal flex flex-row space-x-3">
                            <IoIosAirplane />
                            <h1 className="text-gray-600">
                              {item.pesawat.name}
                            </h1>
                          </div>
                          <h1>{item.categoryClass.name}</h1>
                          <div className="wrapper flex justify-center  flex-col lg:flex-row lg:gap-12">
                            <div className="tujuan flex-row flex space-x-2 mt-2 ">
                              <h2 className="text-sm text-gray-600">
                                {item.departureAiport}
                              </h2>
                              <TbPlaneInflight className="text-yellow-300" />
                              <h2 className="text-sm text-gray-600">
                                {item.arrivalAirport}
                              </h2>
                            </div>

                            <div className="time flex flex-row lg:justify-around lg:items-center lg:space-x-36">
                              <div className="arr-dep flex flex-row gap-7">
                                <div className="time flex flex-row items-center justify-center mt-2 ">
                                  <FaPlaneDeparture
                                    className="text-sky-500 mr-2"
                                    size={15}
                                  />{" "}
                                  <h2 className="text-gray-600 text-sm">
                                    {" "}
                                    {item.scheduleTime.depatureTime.slice(0, 5)}
                                  </h2>
                                </div>
                                <div className="time flex flex-row items-center justify-center mt-2">
                                  <FaPlaneArrival
                                    className="text-sky-500 mr-2"
                                    size={15}
                                  />{" "}
                                  <h2 className="text-gray-600 text-sm  ">
                                    {" "}
                                    {item.scheduleTime.arrivalTime.slice(0, 5)}
                                  </h2>
                                </div>
                              </div>

                              <h2 className="text-sm text-gray-600 lg:flex hidden flex-row items-center gap-1 mr-3">
                                <MdAttachMoney
                                  size={20}
                                  className="text-emerald-700"
                                />
                                {rupiah(item.price)}
                                <span className="text-xs">/org</span>
                              </h2>
                              <div className="date lg:flex   hidden lg:justify-start gap-2 items-center flex-row mt-2">
                                <MdDateRange className="mb-2" />
                                <h2 className="text-sm text-gray-600 ">
                                  {" "}
                                  {item.date}
                                </h2>
                              </div>
                              <button
                                onClick={() => jadwal(item.id)}
                                className="bg-primary-100 w-20 py-1 mb-2 hidden lg:flex text-white items-center justify-center rounded-lg text-sm"
                              >
                                Pesan
                              </button>
                            </div>
                          </div>
                          <div className="date flex   lg:hidden lg:justify-start gap-2 items-center flex-row mt-2">
                            <MdDateRange className="mb-2" />
                            <h2 className="text-sm text-gray-600 ">
                              {" "}
                              {item.date}
                            </h2>
                          </div>

                          <div className="price flex flex-row justify-between items-center">
                            <h2 className="text-sm text-gray-600 lg:hidden flex flex-row items-center gap-1 mr-3">
                              <MdAttachMoney
                                size={20}
                                className="text-emerald-700"
                              />
                              {rupiah(item.price)}
                              <span className="text-xs">/org</span>
                            </h2>
                            <button
                              onClick={() => jadwal(item.id)}
                              className="bg-primary-100 w-20 py-1 mb-2 lg:hidden text-white rounded-lg text-sm"
                            >
                              Pesan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="empty flex justify-center h-40 items-center flex-col w-[100%] lg:w-[95%]    mt-5">
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
