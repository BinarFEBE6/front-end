import React from "react";

import "./Main.css";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

import { Carousel } from "antd";

function main() {
  return (
    <>
      {/* HERO SECTION */}

      <div className="relative">
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
        <div className="bg-slate-500/50 absolute w-4/5 bottom-10 h-max-md mx-12 md:mx-40 rounded-xl p-5 md:p-7 grid gap-2 md:flex">
          <div className="bg-slate-200 w-full h-10 md:h-12 rounded-full"></div>
          <button
            className="bg-transparent hover:bg-white text-white font-semibold hover:text-slate-500 py-2 px-6 border border-white hover:border-transparent rounded-full ml-2"
          >
            Button
          </button>
        </div>
        <div className="absolute top-[30%] flex flex-col left-10 md:left-14">
          <BsFacebook className="text-white mb-10 cursor-pointer" />
          <BsTwitter className="text-white mb-10 cursor-pointer" />
          <BsLinkedin className="text-white mb-10 cursor-pointer" />
          <BsYoutube className="text-white cursor-pointer" />
        </div>
      </div>

      {/* END HERO SECTION */}
    </>
  );
}

export default main;
