import React from "react";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Steps } from "antd";
import {
  AiFillCheckCircle,
  AiFillSchedule,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";

const Confirmation = () => {
  const navigate = useNavigate();

  const departure = JSON.parse(localStorage.getItem("departure"));
  const arrival = JSON.parse(localStorage.getItem("arrival"));

  const getGuestId = JSON.parse(localStorage.getItem("guestId"));
  const getSeatId = JSON.parse(localStorage.getItem("seatId"));
  const getScheduleId = JSON.parse(localStorage.getItem("scheduleId"));

  const valueOrder = {
    guestId: getGuestId,
    seatId: getSeatId,
    scheduleId: getScheduleId,
  };

  const handleReset = () => {
    window.localStorage.removeItem("guestId");
    window.localStorage.removeItem("seatId");
    window.localStorage.removeItem("scheduleId");
    navigate(`/schedule/${departure}/${arrival}`);
    window.location.reload();
  };

  let token = JSON.parse(localStorage.getItem("token"));

  const postOrder = async () => {
    try {
      const res = await axios.post(
        `https://binar-academy-terbangin.herokuapp.com/api/booking/add`,
        valueOrder,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.localStorage.removeItem("guestId");
      window.localStorage.removeItem("seatId");
      window.localStorage.removeItem("scheduleId");
      window.localStorage.removeItem("departure");
      window.localStorage.removeItem("arrival");

      localStorage.setItem("notif", JSON.stringify(res.data.data.notification));

      Swal.fire({
        icon: "success",
        title: "Good Job!",
        text: "Order Succes!",
        confirmButtonText: "Back to Home",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });

      return res.data.data;
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Order Failed!",
      });
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
                  <h1 className="text-blue-300 lg:block hidden">Schedule</h1>
                ),
                status: "process",
                icon: <AiFillSchedule className="text-3xl text-blue-300" />,
              },
              {
                title: (
                  <h1 className="text-blue-300 lg:block hidden">
                    Guest Details
                  </h1>
                ),
                status: "process",
                icon: <BsPersonPlusFill className="text-3xl text-blue-300" />,
              },
              {
                title: (
                  <h1 className="text-blue-300 lg:block hidden">Choose Seat</h1>
                ),
                status: "process",
                icon: (
                  <MdAirlineSeatReclineExtra className="text-3xl text-blue-300" />
                ),
              },
              {
                title: (
                  <h1 className="text-blue-500 lg:block hidden">
                    Confirmation
                  </h1>
                ),
                status: "process",
                icon: <AiFillCheckCircle className="text-3xl text-blue-500" />,
              },
            ]}
          />
        </div>
      </div>

      <div className="pt-6">
        <div className=" bg-white drop-shadow-xl w-full h-[10vh] lg:h-[12vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold text-sky-700">Confirmation</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-[90%] lg:w-[50%] h-full pt-10 my-12 rounded-3xl border shadow-md">
            <h1 className="text-center text-xl lg:text-2xl font-bold mb-12 text-sky-900">
              Are you Confirm this Order ?
            </h1>
            <div className="flex items-center justify-center gap-5 lg:gap-10 mb-16 lg:mb-20">
              <button
                onClick={handleReset}
                className="flex items-center p-2 lg:px-4 lg:py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl cursor-pointer"
              >
                <IoCloseSharp className="mr-2 mt-1" />
                Reset Order
              </button>

              <button
                onClick={postOrder}
                className="flex items-center p-2 lg:px-4 lg:py-2 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl cursor-pointer"
              >
                <AiOutlineCheck className="mr-2 mt-1" />
                Confirm Order
              </button>
            </div>
            <div className="lg:text-md text-xs font-extralight pl-6 pb-3">
              <h5>Note :</h5>
              <ul>
                <li className="mb-0.5">
                  - If you want to change data order, Click Reset Order
                </li>
                <li>- If you want to confirm order, Click Confirm Order</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Confirmation;
