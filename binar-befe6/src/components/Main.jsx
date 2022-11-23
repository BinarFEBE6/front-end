import React from "react";

import "./Main.css";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

import { Carousel } from "antd";

function main() {
  return (
    <>
      <div className="hero relative">
        <Carousel autoplay effect="fade">
          <div>
            <img
              src="https://fegatravel.com/images/bali.jpg"
              alt="hero"
              className="object-cover h-screen w-full"
            />
          </div>
          <div>
            <img
              src="https://digitalbisa.id/uploads/articles/konten-digital-alat-penunjang-pesona-indonesia-l1kZehcslL.jpg"
              alt="hero"
              className="object-cover h-screen w-full"
            />
          </div>
          <div>
            <img
              src="https://wallpapercave.com/wp/wp4190912.jpg"
              alt="hero"
              className="object-cover h-screen w-full"
            />
          </div>
        </Carousel>
        <div className="bg-slate-500/75 absolute w-3/4 bottom-14 h-max-md mx-12 md:mx-48 rounded-xl p-5 md:p-7 grid gap-2 md:flex">
          <div className="bg-slate-200 w-full h-10 md:h-12 rounded-full"></div>
          <button
            className="w-1/5 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl ml-2"
          >
            Search Flights
          </button>
        </div>
        <div className="absolute top-[30%] flex flex-col left-10 md:left-14">
          <BsFacebook className="text-white mb-10 cursor-pointer" />
          <BsTwitter className="text-white mb-10 cursor-pointer" />
          <BsLinkedin className="text-white mb-10 cursor-pointer" />
          <BsYoutube className="text-white cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default main;
