import React from "react";

import "./Main.css";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";

import { Carousel, DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="hero relative">
        <div className="absolute w-full h-[20vh] bg-gradient-to-b from-sky-800 z-10"></div>
        <Carousel autoplay effect="fade">
          <div>
            <img
              src="https://fegatravel.com/images/bali.jpg"
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
            <div className="absolute w-full top-[53%] text-center">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black tracking-[15px] uppercase">
                Bali
              </h1>
            </div>
          </div>
          <div>
            <img
              src="https://digitalbisa.id/uploads/articles/konten-digital-alat-penunjang-pesona-indonesia-l1kZehcslL.jpg"
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
            <div className="absolute w-full top-[53%] text-center">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black tracking-[15px] uppercase">
                Papua
              </h1>
            </div>
          </div>
          <div>
            <img
              src="https://wallpapercave.com/wp/wp4190912.jpg"
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
            <div className="absolute w-full top-[53%] text-center">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black tracking-[15px] uppercase">
                Jawa
              </h1>
            </div>
          </div>
        </Carousel>

        <div className="flex justify-center">
          <div className=" bg-slate-400/50 absolute bottom-4 lg:bottom-12 h-max-md rounded-xl p-5  lg:p-7 lg:w-[90%]">
            <div className="flight flex lg:flex-row lg:justify-center flex-col">
              <div className="estimasi w-[40%]">
                <div className="flex justify-center lg:justify-start ">
                  <MdAirplanemodeActive className="text-white mr-2 lg:text-3xl lg:mb-5 lg:hover:-translate-y-4 lg:duration-300" />
                  <p className="text-xs lg:text-xl lg:font-bold text-white">
                    Flight
                  </p>
                </div>
                <div className="lg:flex lg:items-center grid gap-2">
                  <Select
                    placeholder="From"
                    style={{
                      width: 250,
                    }}
                    size="large"
                    onChange={handleChange}
                    placement={"topLeft"}
                    options={[
                      {
                        value: "bali",
                        label: "Bali",
                      },
                      {
                        value: "jakarta",
                        label: "Jakarta",
                      },
                      {
                        value: "bogor",
                        label: "Bogor",
                      },
                      {
                        value: "lhokseumawe",
                        label: "Lhokseumawe",
                      },
                      {
                        value: "bandung",
                        label: "Bandung",
                      },
                    ]}
                  />
                  <CgArrowsExchange
                    size={20}
                    className="bg-white rounded-full hidden lg:block"
                  />
                  <Select
                    placeholder="To"
                    style={{
                      width: 250,
                    }}
                    size="large"
                    onChange={handleChange}
                    placement={"topLeft"}
                    options={[
                      {
                        value: "bali",
                        label: "Bali",
                      },
                      {
                        value: "jakarta",
                        label: "Jakarta",
                      },
                      {
                        value: "bogor",
                        label: "Bogor",
                      },
                      {
                        value: "lhokseumawe",
                        label: "Lhokseumawe",
                      },
                      {
                        value: "bandung",
                        label: "Bandung",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="date w-[50%] lg:ml-6">
                <div className="lg:block hidden">
                  <div className="flex">
                    <FaPlaneDeparture
                      onClick={() => navigate("/guestDetails")}
                      className="text-white mr-3 lg:text-2xl lg:mb-6 hover:scale-125 duration-500"
                    />
                    <p
                      className="text-lg font-semibold text-white "
                      onClick={() => navigate("/Schedule")}
                    >
                      Departure
                    </p>
                  </div>
                  <div className="flex items-center">
                    <DatePicker
                      onChange={onChange}
                      placement={"topLeft"}
                      style={{
                        width: "100%",
                      }}
                      size="large"
                      className="mr-2"
                      placeholder="Departure on"
                    />
                    {/* <DatePicker
                      onChange={onChange}
                      style={{
                        width: 250,
                      }}
                      size="large"
                      placement={"topRight"}
                      placeholder="Return on"
                    /> */}
                  </div>
                </div>
              </div>
              <div className="button flex justify-center lg:mt-2 lg:w-[20%]">
                <button
                  onClick={() => navigate(`/booking`)}
                  className="w-full   px-4 h-9 lg:h-12 mt-2 lg:mt-13 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl lg:ml-5"
                >
                  Search Flights
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute hidden lg:block top-[30%] flex-col left-10 lg:left-12">
          <BsFacebook className="text-white mb-10 cursor-pointer hover:scale-150 duration-500" />
          <BsTwitter className="text-white mb-10 cursor-pointer hover:scale-150 duration-500" />
          <BsLinkedin className="text-white mb-10 cursor-pointer hover:scale-150 duration-500" />
          <BsYoutube className="text-white cursor-pointer hover:scale-150 duration-500" />
        </div>
      </div>
    </>
  );
}

export default Main;
