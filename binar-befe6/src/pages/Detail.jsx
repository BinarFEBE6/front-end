import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../data.json";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <div>
        <Navbar />
        {data
          .filter((object) => object.id === Number(id))
          .map((object) => (
            <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-2 bg-white">
              <div className="flex justify-center items-center w-full h-full bg-slate-200 md:h-screen md:grid-rows-2">
                <div>
                  <img
                    className="w-[350px] h-full mt-[80px]  rounded-xl md:h-[700px] lg:h-[500px] lg:w-[600px] object-cover  "
                    src={object.image}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full h-screen bg-slate-200 text-black md:h-screen">
                <div className="mx-5 mr-10 md:mt-[170px] lg:mt-[130px] ">
                  <p className="text-center  font-bold text-[40px]">
                    {object.Country}
                  </p>
                  <p className="pt-3 text-[18px] font-semibold">
                    {object.Landmark}
                  </p>
                  <p className="pt-3 text-justify ml-[20px] text-[16px] font-semibold">
                    {object.Description}
                  </p>
                  <p className="pt-3"> </p>
                  <p className="flex jus items-center pt-5"></p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Detail;
