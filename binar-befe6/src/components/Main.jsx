import React from "react";

import "./Main.css";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";
import { FaPlane } from "react-icons/fa";

import { Carousel, DatePicker, Select } from "antd";

function main() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="hero relative">
        <Carousel autoplay effect="fade">
          <div>
            <img
              src="https://fegatravel.com/images/bali.jpg"
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
          </div>
          <div>
            <img
              src="https://digitalbisa.id/uploads/articles/konten-digital-alat-penunjang-pesona-indonesia-l1kZehcslL.jpg"
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
          </div>
          <div>
            <img
              src="https://wallpapercave.com/wp/wp4190912.jpg"
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
          </div>
        </Carousel>
        <div className=" bg-slate-500/75 absolute w-[75%] lg:w-[90%] bottom-4 lg:bottom-12 h-max-md rounded-xl p-5 lg:p-7 lg:flex mx-12 lg:mx-20">
          <div className="flex">
            <div className="lg:mr-5">
              <div className="flex justify-center lg:justify-start hover:scale-75 duration-500">
                <FaPlane className="text-white mr-2 lg:text-3xl lg:mb-5" />
                <p className="text-xs lg:text-xl lg:font-bold text-white">Flight</p>
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
            <div className="lg:block hidden">
              <div className="flex hover:scale-75 duration-500">
                <TbCalendarTime className="text-white mr-2 lg:text-3xl lg:mb-5" />
                <p className="text-xl font-bold text-white">Date & Time</p>
              </div>
              <div className="flex items-center">
                <DatePicker
                  onChange={onChange}
                  placement={"topLeft"}
                  style={{
                    width: 250,
                  }}
                  size="large"
                  className="mr-2"
                  placeholder="Depart on"
                />
                <DatePicker
                  onChange={onChange}
                  style={{
                    width: 250,
                  }}
                  size="large"
                  placement={"topRight"}
                  placeholder="Return on"
                />
              </div>
            </div>
          </div>
          <button className="lg:w-32 h-8 lg:h-12 mt-2 lg:mt-13 w-full lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl hover:scale-110 lg:ml-16">
            Search Flights
          </button>
        </div>
        <div className="absolute hidden lg:block top-[30%] flex flex-col left-10 lg:left-12">
          <BsFacebook className="text-white mb-10 cursor-pointer hover:scale-150 duration-500" />
          <BsTwitter className="text-white mb-10 cursor-pointer hover:scale-150 duration-500" />
          <BsLinkedin className="text-white mb-10 cursor-pointer hover:scale-150 duration-500" />
          <BsYoutube className="text-white cursor-pointer hover:scale-150 duration-500" />
        </div>
      </div>
    </>
  );
}

export default main;
