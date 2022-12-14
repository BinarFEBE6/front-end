import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import { TbPlaneInflight } from "react-icons/tb";
import "swiper/css";

import "swiper/css/pagination";
import { AiOutlineArrowRight, AiOutlineClockCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaPlane, FaPlaneSlash } from "react-icons/fa";
import axios from "axios";

function Schedule() {
  const [Skejul, setSkejul] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const jadwal = () => {
    setSkejul(true);
  };
  const depart = localStorage.getItem("depart");
  const arrival = localStorage.getItem("arival");
  const navigate = useNavigate();
  const values = {
    departureAiport: depart,
    arrivalAirport: arrival,
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
      <div className="schedule w-full h-full lg:w-full  flex justify-center items-center bg-slate-100 flex-col ">
        <div className="class bg bg-sky-700 w-full h-[35vh] lg:h-[40vh] rounded-b-[50px] lg:rounded-b-[100px] mb-5 flex items-center flex-col justify-center shadow-xl">
          <h1 className=" text-2xl lg:text-4xl text-center text-white font-bold mt-7 tracking-wider uppercase">
            Choose Your Planning Schedule
          </h1>
        </div>
        <div className="wrapper w-[90vw] h-36 lg:w-[76vw] bg-white shadow-xl rounded-md">
          <div className="schedule-wrapping  p-2 ">
            <div className="location flex flex-row space-x-5 ">
              <p className="text-xl text-gray-900 font-semibold">{depart}</p>
              <p className="text-lg text-primary-100">To</p>
              <p className="text-xl text-gray-900 font-semibold">{arrival}</p>
            </div>
          </div>
        </div>
        <div
          className={`flight bg-transparent w-[90vw] h-[70vh]  mt-7 lg:w-[80vw] rounded-md  ${
            Skejul ? "" : " flex justify-center"
          }`}
        >
          {Skejul ? (
            <div className="class flex justify-center flex-col items-center">
              {schedule &&
                schedule.map((item) => {
                  return (
                    <div className="flight w-[95%] rounded-md flex bg-white shadow-lg mt-3">
                      <div className="maskapai flex flex-row justify-between mx-4 mt-2">
                        <div>
                          <div className="Kapal flex flex-row space-x-3">
                            <TbPlaneInflight />
                            <h1>{item.pesawat.name}</h1>
                          </div>

                          <div className="tujuan flex-row flex space-x-2 mt-2">
                            <h2 className="text-sm">{item.departureAiport}</h2>
                            <AiOutlineArrowRight />
                            <h2 className="text-sm">{item.arrivalAirport}</h2>
                          </div>

                          <div className="time flex flex-row items-center space-x-2 mt-2">
                            <AiOutlineClockCircle size={20} />
                            <h2>Depart {item.scheduleTime.depatureTime}</h2>
                          </div>
                          <div className="time flex flex-row items-center space-x-2 mt-2">
                            <AiOutlineClockCircle size={20} />
                            <h2>Arrival {item.scheduleTime.arrivalTime}</h2>
                          </div>

                          <div className="time flex flex-row items-center space-x-2 mt-2">
                            <AiOutlineClockCircle size={20} />
                            <h2> {item.date}</h2>
                          </div>
                        </div>

                        <div className="class flex flex-col">
                          <h1 className="text-end">
                            {item.categoryClass.name}
                          </h1>
                          <h1>Rp. {item.price}</h1>
                          <button
                            onClick={() => navigate(`/guestDetails`)}
                            className="w-full rounded-lg p-2 text-white bg-sky-500"
                          >
                            Pesan
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
