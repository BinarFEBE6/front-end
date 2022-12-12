import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Main.css";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { MdAirplanemodeActive } from "react-icons/md";

import { Carousel, Cascader } from "antd";
import { useNavigate } from "react-router-dom";

function Main() {
  const [country, setCountry] = useState([]);
  // const [city, setCity] = useState([]);
  const [countryId, setCountryId] = useState(null);

  const navigate = useNavigate();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const getCountry = async () => {
    try {
      const res = await axios.get(`http://febe6.up.railway.app/api/getCountry`);
      setCountry(res.data.data);
      setCountryId(res.data.data.map((item) => item.id));
    } catch (error) {
      console.log(error);
    }
  };

  // const getCity = async () => {
  //   if (countryId.map(item => (item.id))) {
  //     try {
  //       const res = await axios.get(
  //         `http://febe6.up.railway.app/api/getCity/${countryId}`
  //       );
  //       setCity(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  console.log("country", country);
  // console.log("city", city);
  console.log(countryId);

  useEffect(() => {
    getCountry();
    // getCity();
  }, []);

  // const option = country.map((item) => {

  //   const data = {
  //     value: item.countryName,
  //     label: item.countryName,
  //     children: {
  //       value: item.countryName,
  //       label: item.countryName,
  //     },
  //   };

  //   return data;
  // });

  const data = country.map((item) => ({
    value: `${item.countryName}`,
    label: `${item.countryName}`,
  }));

  const option = country.map((item) => ({
    value: `${item.countryName}`,
    label: `${item.countryName}`,
    children: data,
  }));

  console.log(option);

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
                    // onChange={handleChange}
                    placement={"topLeft"}
                    options={option}
                  />
                  <CgArrowsExchange
                    size={20}
                    className="bg-white rounded-full hidden lg:block"
                  />
                  <Cascader
                    placeholder="To"
                    style={{
                      width: 250,
                    }}
                    size="large"
                    onChange={handleChange}
                    placement={"topLeft"}
                    options={option}
                  />
                </div>
              </div>
              <div className="button flex justify-center lg:mt-2 lg:w-[40%]">
                <button
                  onClick={() => navigate(`/schedule`)}
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
