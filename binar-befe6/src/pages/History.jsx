import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { MdAirplanemodeActive } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";
import axios from "axios";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function History() {
  let token = JSON.parse(localStorage.getItem("token"));
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    try {
      const respone = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getHistories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHistory(respone.data.data);
      console.log(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {token ? (
        <div className="bg-gray-100 ">
          <Navbar withcroll={false} />
          <div className="pt-16"></div>
          <div className="pt-3 bg-white drop-shadow-xl w-full h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center mb-6">
            <h1 className="text-3xl font-bold text-sky-700">History Booking</h1>
          </div>
          {history.length ? (
            <>
              {history.map((item) => (
                <>
                  {item.ticket.length ? (
                    <div className="  justify-center  items-center flex w-full px-2  lg:grid gap-2 mb-5">
                      <div className="bg-white w-[80vw] px-2   py-2 mt-2 lg:w-[70vw] rounded-lg drop-shadow-xl">
                        <div className="flex px-4 mt-3 space-x-1">
                          <div>
                            <MdAirplanemodeActive className="text-sky-500 text-[20px]" />
                          </div>

                          <div className="lg:flex justify-between w-screen">
                            <p className="font-medium text-gray-700">
                              {item.schedule.pesawat.airport.name}
                            </p>
                          </div>
                        </div>

                        <div className="slicer lg:flex lg:flex-row lg:justify-between">
                          {/* Left */}
                          <div className="left">
                            {" "}
                            <p className="font-medium ml-5 text-gray-700 ">
                              {item.schedule.pesawat.name}
                            </p>
                            <p className="font-medium ml-5 text-gray-700 ">
                              {item.schedule.categoryClass.name}
                            </p>
                            <div className="ml-5 flex-row flex space-x-3 ">
                              Order ID :
                              {item.ticket.map((order) => {
                                return (
                                  <p className="font-medium text-gray-700">
                                    {order.orderId}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                          {/* Right */}
                          <div className="right">
                            <div className="flex ml-5 gap-2">
                              <p className="font-medium text-gray-700">
                                {item.schedule.departureAiport}
                              </p>
                              <TbPlaneInflight className="text-yellow-300" />
                              <p className="font-medium text-gray-700">
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
                                  <h2 className=" text-sm text-gray-700">
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
                                  <h2 className=" text-sm text-gray-700">
                                    {item.schedule.scheduleTime.arrivalTime.slice(
                                      0,
                                      5
                                    )}
                                  </h2>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 flex gap-2 ml-5">
                              <MdDateRange
                                size={20}
                                className="text-gray-700"
                              />
                              <h2 className="text-sm  font-medium text-gray-700">
                                {item.schedule.date}
                              </h2>
                            </div>
                          </div>
                          <div className="end lg:mr-5">
                            <div className="mt-2 flex gap-2 ml-5">
                              <FaMoneyBillWave
                                size={20}
                                className="mb-2 text-emerald-700"
                              />
                              <h2 className="text-sm font-medium text-gray-700">
                                {rupiah(item.totalPrice)}
                              </h2>
                            </div>
                            <div className="details grid grid-cols-3 lg:flex lg:flex-row space-x-2 ml-5 items-center mb-3">
                              <h1 className="text-gray-700 font-medium">
                                Details :{" "}
                              </h1>
                              {item.ticket.map((id) => {
                                return (
                                  <button
                                    onClick={() =>
                                      navigate(`/details/${id.guestId}`) +
                                      localStorage.setItem(
                                        "guestId",
                                        id.guestId
                                      )
                                    }
                                    className="w-16  p-3 bg-primary-100 rounded-xl text-white"
                                  >
                                    view
                                  </button>
                                );
                              })}
                            </div>
                          </div>
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
      ) : (
        Swal.fire({
          icon: "error",
          title: "Oopps..!",
          text: "If you are not logged in, you can login first !",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        })
      )}
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
