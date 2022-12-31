import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import slash from "../assets/planeVector.png";
import "swiper/css";
import "swiper/css/pagination";

import { MdDateRange, MdAirlineSeatReclineExtra } from "react-icons/md";
import { AiFillSchedule, AiFillCheckCircle } from "react-icons/ai";
import { TbPlaneInflight } from "react-icons/tb";
import { BsPersonPlusFill } from "react-icons/bs";
import { IoIosAirplane } from "react-icons/io";
import {
  FaPlaneSlash,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaMoneyBillWave,
} from "react-icons/fa";

import axios from "axios";

import { Steps } from "antd";

function Schedule() {
  const [Skejul] = useState([]);
  const [schedule, setSchedule] = useState([]);

  const jadwal = (value) => {
    localStorage.setItem("scheduleId", value);
    localStorage.setItem("people", 1);
    navigate("/guestDetails");
    window.scroll(0, 0);
  };

  const navigate = useNavigate();
  const { departure } = useParams();
  const { arrival } = useParams();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const getSchedule = async () => {
    try {
      const res = await axios.post(
        "https://binar-academy-terbangin.herokuapp.com/api/getSchedule",
        {
          departureAiport: `${departure}`,
          arrivalAirport: `${arrival}`,
        }
      );
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

      <div className="bg-gray-100 pt-32 w-full">
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
        <div className=" bg-white drop-shadow-xl w-full h-[12vh] lg:h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center mb-16">
          <h1 className="text-3xl font-bold text-sky-700 pt-3">Schedule</h1>
        </div>
        <div className="wrapper w-[90vw] p-3 lg:w-[76vw] 2xl:w-[76vw] xl:w-[80vw] bg-white shadow-xl rounded-full flex justify-center items-center mb-12">
          <div className="location flex flex-row  items-center justify-center mt-3 gap-3">
            <p className="text-xl text-gray-600 font-semibold ">{departure}</p>
            <IoIosAirplane className="text-yellow-300  mb-3" size={20} />
            <p className="text-xl text-gray-600 font-semibold">{arrival}</p>
          </div>
        </div>
        <div
          className={`flight bg-transparent w-[90vw] lg:w-[80vw] xl:w-[84vw] 2xl:w-[80vw] rounded-md  ${
            Skejul ? "" : "flex justify-center"
          }`}
        >
          {schedule.length ? (
            <div className="class flex justify-center flex-col items-center">
              {schedule &&
                schedule.map((item) => {
                  return (
                    <div className="flight w-[95%] rounded-md flex p-2 bg-white shadow-lg mt-3">
                      <div className="maskapai flex flex-row justify-between lg:ml-4 mt-2">
                        <div className="p-3 lg:p-0 xl:p-0 2xl:p-0">
                          <div className="Kapal flex flex-row space-x-3">
                            <IoIosAirplane className="mt-0.5" />
                            <h1 className="text-gray-600 font-bold">
                              {item.pesawat.name}
                            </h1>
                          </div>
                          <h1 className="pt-4 pb-2">
                            {item.categoryClass.name}
                          </h1>
                          <div className="wrapper flex justify-center  flex-col lg:flex-row lg:gap-10">
                            <div className="tujuan flex-row flex space-x-2 mt-2 ">
                              <h2 className="text-sm text-gray-600">
                                {item.departureAiport}
                              </h2>
                              <TbPlaneInflight className="text-yellow-300" />
                              <h2 className="text-sm text-gray-600">
                                {item.arrivalAirport}
                              </h2>
                            </div>

                            <div className="time flex flex-row lg:justify-around  lg:space-x-5 xl:space-x-36">
                              <div className="arr-dep flex flex-row gap-7">
                                <div className="time flex flex-row  justify-center mt-2 ">
                                  <FaPlaneDeparture
                                    className="text-sky-500 mr-2 mt-1"
                                    size={15}
                                  />{" "}
                                  <h2 className="text-gray-600 text-sm">
                                    {" "}
                                    {item.scheduleTime.depatureTime.slice(0, 5)}
                                  </h2>
                                </div>
                                <div className="time flex flex-row  justify-center mt-2">
                                  <FaPlaneArrival
                                    className="text-sky-500 mr-2 mt-1"
                                    size={15}
                                  />{" "}
                                  <h2 className="text-gray-600 text-sm  ">
                                    {" "}
                                    {item.scheduleTime.arrivalTime.slice(0, 5)}
                                  </h2>
                                </div>
                              </div>

                              <h2 className="text-sm text-gray-600 lg:flex hidden flex-row items-center gap-1 mr-3">
                                <FaMoneyBillWave
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
                                Choose
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
                              <FaMoneyBillWave
                                size={20}
                                className="text-emerald-700"
                              />
                              {rupiah(item.price)}
                              <span className="text-xs">/org</span>
                            </h2>
                            <div></div>
                            <button
                              onClick={() => jadwal(item.id)}
                              className="bg-primary-100 w-20 py-1 mb-2 lg:hidden text-white rounded-lg text-sm ml-14"
                            >
                              Choose
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="empty flex justify-center h-40 items-center flex-col w-[100%] lg:w-[95%] mt-5">
              <img src={slash} alt="" className="lg:w-[30%] w-[60%]" />
              <h1 className="text-center pt-2 text-lg font-normal text-gray-600">
                There is no schedule for flights from {departure} to {arrival}
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
