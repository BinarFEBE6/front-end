import React from "react";

import "./Main.css";

import { Carousel } from "antd";
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "50rem",
  textAlign: "center",
  background: "#364d79",
};

function main() {
  return (
    <>
      {/* HERO SECTION */}

      <div className="relative">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div className="wrapper flex justify-center items-center">
          <div className="bg-slate-500/50 lg:w-3/4 absolute bottom-10 h-32 lg:mx-52 rounded-xl p-7 w-[80%]  ">
            <div className="bg-black w-full h-16 "></div>
          </div>
        </div>

        <div className="absolute top-[35%] flex flex-col left-8">
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>

      {/* END HERO SECTION */}
    </>
  );
}

export default main;
