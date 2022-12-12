import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function SetSeat() {
  const [seat, setSeat] = useState([]);

  const getSeat = async () => {
    try {
      const res = await axios.get(`http://febe6.up.railway.app/api/getSeats`);
      setSeat(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSeat();
  }, []);

  return (
    <>
      <Navbar withcroll={false} />
      <div className="pt-24">
        <div className=" bg-white drop-shadow-xl w-full h-[20vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold">Take a Seat</h1>
        </div>
        <div className="bg-white w-80% h-full my-12 mx-32 rounded-3xl border shadow-md flex justify-center py-12">
          <div className="inline-grid grid-cols-2 gap-4">
            {seat
              .map((item) => (
                <div key={item.id} className="w-20 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75">
                  <h1 className="pt-2 font-light">{item.seatName}</h1>
                </div>
              ))
              .slice(0, 20)}
          </div>
          <div className="inline-grid grid-cols-2 gap-4 mx-24">
            {seat
              .map((item) => (
                <div key={item.id} className="w-20 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75">
                  <h1 className="pt-2 font-light">{item.seatName}</h1>
                </div>
              ))
              .slice(20, 30)}
          </div>
          <div className="inline-grid grid-cols-2 gap-4">
            {seat
              .map((item) => (
                <div key={item.id} className="w-20 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75">
                  <h1 className="pt-2 font-light">{item.seatName}</h1>
                </div>
              ))
              .slice(30, 50)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SetSeat;
