import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { MdAirplanemodeActive } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";
import axios from "axios";

import { MdDateRange, MdAttachMoney } from "react-icons/md";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";

function History() {
  const email = JSON.parse(localStorage.getItem("userEmail"));
  let token = JSON.parse(localStorage.getItem("token"));
  const [history, setHistory] = useState([]);
  const url = "https://febe6.up.railway.app/api/getHistories";
  const getHistory = async () => {
    try {
      const respone = await axios.get(
        `https://febe6.up.railway.app/api/getHistories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(respone.data);
      setHistory(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <>
      <div className="bg-gray-100 ">
        <Navbar withcroll={false} />
        <div className="h-20"></div>
        <div className=" bg-white drop-shadow-xl w-full h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-sky-700">History Booking</h1>
        </div>
        {history.length ? (
          <>
            {history.map((item) => (
              <>
                {item.ticket.length ? (
                  <div className="  justify-center w-full px-2  lg:grid gap-2 mb-10">
                    <div className="bg-white w-full px-2   mt-2 lg:w-[800px] rounded-lg drop-shadow-2xl">
                      <div className="flex p-4 gap-1">
                        <div>
                          <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
                        </div>

                        <div className="lg:flex justify-between w-screen">
                          <p className="font-bold">
                            {item.schedule.pesawat.airport.name} -
                            {item.schedule.pesawat.name}
                          </p>
                          <p className="font-bold lg:ml-0 -ml-5 lg:mb-0 -mb-1">
                            {item.schedule.categoryClass.name}
                          </p>
                        </div>
                      </div>

                      <div className="ml-5">
                        <p className="font-bold">
                          Order ID : {item.ticket.map((el) => el.orderId)}
                        </p>
                      </div>
                      <div className="flex ml-5 gap-2">
                        <p className="font-bold">
                          {item.schedule.departureAiport}
                        </p>
                        <TbPlaneInflight className="text-yellow-300" />
                        <p className="font-bold">
                          {item.schedule.arrivalAirport}
                        </p>
                      </div>

                      <div className="gap-1 flex ml-5 ">
                        <div className="flex gap-3">
                          <div className="flex gap-1">
                            <FaPlaneDeparture
                              className="text-sky-500 mr-2"
                              size={15}
                            />
                            <h2 className=" text-sm">
                              {item.schedule.scheduleTime.depatureTime.slice(
                                0,
                                5
                              )}
                            </h2>
                          </div>

                          <div className="flex gap-1">
                            <FaPlaneArrival
                              className="text-sky-500 mr-2"
                              size={15}
                            />
                            <h2 className=" text-sm">
                              {item.schedule.scheduleTime.arrivalTime.slice(
                                0,
                                5
                              )}
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 flex gap-2 ml-5">
                        <MdDateRange size={20} />
                        <h2 className="text-sm  ">{item.schedule.date}</h2>
                      </div>

                      <div className="mt-2 flex gap-2 ml-5">
                        <MdAttachMoney
                          size={20}
                          className="mb-2 text-emerald-700"
                        />
                        <h2 className="text-sm ">
                          {rupiah(item.totalPrice)}
                          <span className="text-xs">/org</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </>
            ))}
          </>
        ) : (
          <div className="none flex justify-center items-center flex-col h-[20vh] lg:h-[50vh]">
            <div className="icon">
              <BiPaperPlane size={40} />
            </div>
            <h1>you have never ordered</h1>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default History;

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
