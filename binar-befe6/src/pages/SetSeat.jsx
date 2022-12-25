import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

import { notification, Steps, Tabs } from "antd";
import { BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { AiFillCheckCircle, AiFillSchedule } from "react-icons/ai";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const displayChoose = [];

function SetSeat() {
  const [seat, setSeat] = useState([]);
  const [seatId, setSeatId] = useState(null);
  const [seatValue, setSeatValue] = useState(null);

  const navigate = useNavigate();

  const departure = JSON.parse(localStorage.getItem("departure"));
  const arrival = JSON.parse(localStorage.getItem("arrival"));
  const scheduleId = JSON.parse(localStorage.getItem("scheduleId"));

  const [click, setClick] = useState(null);

  const displayClick = (value1, value2) => {
    setSeatId(value1);
    setSeatValue(value2);
    setClick(value1);
  };

  const getSeat = async () => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getSeats/${scheduleId}`
      );
      setSeat(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSeat();
  }, []);

  const people = JSON.parse(localStorage.getItem("people"));

  const choosenSeat = () => {
    displayChoose.push(seatId);

    localStorage.setItem("seatId", JSON.stringify(displayChoose));

    Swal.fire({
      icon: "success",
      title: "Submit Seat Succes",
      text: `Choosen Seat ${seatValue}`,
    });
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const guest = JSON.parse(localStorage.getItem("people"));
    const seatId = JSON.parse(localStorage.getItem("seatId"));
    console.log(seatId);

    if (seatId === null || seatId.length !== guest) {
      api.info({
        message: `Hello there...`,
        description: "You haven't filled all the data",
        placement: "topRight",
      });
    } else if (seatId.length === guest) {
      navigate("/confirmation");
      window.scroll(0, 0);
    }
  };

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
                status: "finish",
                icon: (
                  <AiFillSchedule
                    className="text-3xl text-blue-500 cursor-pointer hover:scale-110 duration-300"
                    onClick={() =>
                      navigate(`/schedule/${departure}/${arrival}`)
                    }
                  />
                ),
              },
              {
                title: (
                  <h1 className="text-blue-500 lg:block hidden">
                    Guest Details
                  </h1>
                ),
                status: "finish",
                icon: (
                  <BsPersonPlusFill
                    className="text-3xl text-blue-500 cursor-pointer hover:scale-110 duration-300"
                    onClick={() => navigate("/guestDetails")}
                  />
                ),
              },
              {
                title: (
                  <h1 className="text-blue-500 lg:block hidden">Choose Seat</h1>
                ),
                status: "process",
                icon: (
                  <MdAirlineSeatReclineExtra className="text-3xl text-blue-500" />
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

      <div className="pt-6">
        <div className=" bg-white drop-shadow-xl w-full h-[10vh] lg:h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold text-sky-700">Choose Seat</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-[90%] lg:w-[50%] h-full py-10 lg:py-12 my-12 rounded-3xl border shadow-md px-10">
            <Tabs
              centered
              items={new Array(people).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                  label: (
                    <span className="flex items-center">
                      <BsPersonFill className="mr-2" />
                      Guest {id}
                    </span>
                  ),
                  key: id,
                  children: (
                    <>
                      <div className="flex justify-center my-14">
                        <div className="inline-grid grid-cols-2 lg:gap-4 gap-3 mr-6 lg:mr-10">
                          {seat.slice(0, 50).map((item) => (
                            <div
                              onClick={() =>
                                displayClick(item.id, item.seatName)
                              }
                              key={item.id}
                              id={item.id}
                              className={` ${
                                click === item.id
                                  ? "bg-sky-500 text-white border-none"
                                  : "bg-transparent border-2 text-gray-500"
                              } lg:w-20 w-10 lg:h-10 h-10 rounded-lg lg:hover:bg-sky-500 lg:hover:text-white lg:hover:border-none drop-shadow-md flex justify-center items-center cursor-pointer duration-75`}
                            >
                              <h1 className="pt-2 font-light">
                                {item.seatName}
                              </h1>
                            </div>
                          ))}
                        </div>
                        <div className="inline-grid grid-cols-2 lg:gap-4 gap-3 ml-6 lg:ml-10">
                          {seat.slice(50, 100).map((item) => (
                            <div
                              onClick={() =>
                                displayClick(item.id, item.seatName)
                              }
                              key={item.id}
                              id={item.id}
                              className={` ${
                                click === item.id
                                  ? "bg-sky-500 text-white border-none"
                                  : "bg-transparent border-2 text-gray-500"
                              } lg:w-20 w-10 lg:h-10 h-10 rounded-lg lg:hover:bg-sky-500 lg:hover:text-white lg:hover:border-none drop-shadow-md flex justify-center items-center cursor-pointer duration-75`}
                            >
                              <h1 className="pt-2 font-light">
                                {item.seatName}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          htmlType="submit"
                          onClick={() => choosenSeat()}
                          className="lg:w-1/4 px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                        >
                          Submit
                        </button>
                      </div>
                    </>
                  ),
                };
              })}
            />
            <div className="flex justify-center lg:justify-end lg:pr-5 pt-20 pb-4">
              {contextHolder}
              <button
                onClick={() => openNotification()}
                className=" flex items-center py-3 px-5 lg:px-4 lg:py-2 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl cursor-pointer"
              >
                Continue
                <HiArrowSmRight className="ml-2 mt-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SetSeat;
