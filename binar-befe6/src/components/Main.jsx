import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Main.css";

import bali from "../assets/bali.jpg"
import sydney from "../assets/sydney.jpg"
import dubai from "../assets/dubai.jpg"

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdAirplanemodeActive } from "react-icons/md";

import { Carousel, Cascader } from "antd";
import { useNavigate } from "react-router-dom";
import { RiArrowRightCircleFill } from "react-icons/ri";

function Main() {
  const [country, setCountry] = useState([]);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const navigate = useNavigate();

  const handleChangeDeparture = (value) => {
    setDeparture(value[1]);
  };

  const handleChangeArrival = (value) => {
    setArrival(value[1]);
  };

  const handleClick = () => {
    localStorage.setItem("departure", JSON.stringify(departure));
    localStorage.setItem("arrival", JSON.stringify(arrival));
    navigate(`/schedule/${departure}/${arrival}`);
    window.scroll(0, 0);
  };

  const getCountry = async () => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getCountry`
      );
      setCountry(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  const option = country.map((item) => ({
    value: `${item.countryName}`,
    label: `${item.countryName}`,
    children: item.city.map((data) => ({
      value: `${data.cityName}`,
      label: `${data.cityName}`,
    })),
    isLeaf: false,
  }));

  return (
    <>
      <div className="hero relative">
        <div className="absolute w-full h-[14vh] lg:h-[20vh] bg-gradient-to-b from-sky-800 z-10"></div>
        <Carousel autoplay effect="fade">
          <div>
            <img
              src={bali}
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
            <div className="absolute w-full bottom-[38%] lg:top-[53%] text-center">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black tracking-[15px] uppercase">
                bali
              </h1>
            </div>
          </div>
          <div>
            <img
              src={sydney}
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
            <div className="absolute w-full bottom-[38%] lg:top-[53%] text-center">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black tracking-[15px] uppercase">
                sydney
              </h1>
            </div>
          </div>
          <div>
            <img
              src={dubai}
              alt="hero"
              className="object-cover h-[95vh] lg:h-screen w-full"
            />
            <div className="absolute w-full bottom-[38%] lg:top-[53%] text-center">
              <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-black tracking-[15px] uppercase">
                dubai
              </h1>
            </div>
          </div>
        </Carousel>

        <div className="flex justify-center">
          <div className=" bg-slate-400/50 absolute bottom-4 lg:bottom-12 h-max-md rounded-xl p-5  lg:p-7">
            <div className="flight flex lg:flex-row lg:justify-center flex-col">
              <div className="estimasi">
                <div className="flex justify-center lg:justify-start ">
                  <MdAirplanemodeActive className="text-white mr-2 lg:text-3xl lg:mb-5 lg:hover:-translate-y-4 lg:duration-300" />
                  <p className="text-xs lg:text-xl lg:font-bold text-white">
                    Flight
                  </p>
                </div>
                <div className="lg:flex lg:items-center grid gap-2">
                  <Cascader
                    placeholder="From"
                    style={{
                      width: 250,
                    }}
                    size="large"
                    onChange={handleChangeDeparture}
                    placement={"topLeft"}
                    options={option}
                  />
                  <RiArrowRightCircleFill
                    size={20}
                    className="rounded-full hidden lg:block text-white"
                  />
                  <Cascader
                    placeholder="To"
                    style={{
                      width: 250,
                    }}
                    size="large"
                    onChange={handleChangeArrival}
                    placement={"topLeft"}
                    options={option}
                  />
                </div>
              </div>
              <div className="button flex justify-center lg:mt-2 lg:w-[40%]">
                <button
                  onClick={handleClick}
                  className="w-full px-4 h-9 lg:h-12 mt-2 lg:mt-[32px] lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl lg:ml-10"
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
