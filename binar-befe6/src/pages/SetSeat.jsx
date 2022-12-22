import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

import { Checkbox, Steps, Tabs } from "antd";
import { BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { AiFillCheckCircle, AiFillSchedule } from "react-icons/ai";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const displayChoose = [];

function SetSeat() {
  const [seat, setSeat] = useState([]);
  const [seatId, setSeatId] = useState(null);
  const [seatValue, setSeatValue] = useState(null);

  const navigate = useNavigate();

  const [componentDisabled, setComponentDisabled] = useState(false);

  const displayClick = (value1, value2) => {
    setSeatId(value1);
    setSeatValue(value2);
  };

  const getSeat = async () => {
    try {
      const res = await axios.get(`https://febe6.up.railway.app/api/getSeats`);
      setSeat(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGuestId = JSON.parse(localStorage.getItem("guestId"));
  const getSeatId = JSON.parse(localStorage.getItem("seatId"));
  const getScheduleId = JSON.parse(localStorage.getItem("scheduleId"));

  const valueOrder = {
    guestId: getGuestId,
    seatId: getSeatId,
    scheduleId: getScheduleId,
  };

  console.log(valueOrder);

  let token = JSON.parse(localStorage.getItem("token"));

  const postOrder = async () => {
    try {
      const res = await axios.post(
        `https://febe6.up.railway.app/api/booking/add`,
        valueOrder,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Good job!", "Order Succes!", "success");
      window.localStorage.removeItem("guestId");
      window.localStorage.removeItem("seatId");
      navigate("/");
      window.location.reload();
      console.log(res);
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Order Failed!",
      });
    }
  };

  useEffect(() => {
    getSeat();
  }, []);

  const people = JSON.parse(localStorage.getItem("people"));

  const choosenSeat = () => {
    displayChoose.push(seatId);

    localStorage.setItem("seatId", JSON.stringify(displayChoose));

    alert(`Succes Choose seat ${seatValue} !`);
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
                    onClick={() => navigate("/schedule")}
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
        <div className=" bg-white drop-shadow-xl w-full h-[15vh] lg:h-[20vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold text-sky-700">Choose Seat</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-[90%] lg:w-[50%] h-full py-10 lg:py-12 my-12 rounded-3xl border shadow-md flex justify-center">
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
                      <div className="flex justify-center my-10">
                        <div className="inline-grid grid-cols-5 lg:gap-7 gap-5">
                          {seat.map((item) => (
                            <div
                              onClick={() =>
                                displayClick(item.id, item.seatName)
                              }
                              className="lg:w-20 w-10 lg:h-10 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75"
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
          </div>
        </div>
        <div className="lg:flex lg:justify-end lg:items-center mt-2 mb-12">
          <div className="flex justify-center lg:mr-10 mb-10 lg:mb-0">
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
              className="text-lg lg:text-sm"
            >
              Checklist if you're done !
            </Checkbox>
          </div>
          <div className="flex justify-end lg:mr-10 mb-10 lg:mb-0 mr-4">
            <button
              onClick={() => postOrder()}
              disabled={!componentDisabled}
              className={
                !componentDisabled
                  ? "flex items-center p-5 lg:px-4 lg:py-2 bg-gradient-to-l from-gray-500 to-gray-300 text-white font-semibold rounded-lg duration-500 mr-24 cursor-not-allowed"
                  : "flex items-center p-5 lg:px-4 lg:py-2 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl mr-24 cursor-pointer"
              }
            >
              Confirm Order
              <HiArrowSmRight className="ml-2 mt-1" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SetSeat;
