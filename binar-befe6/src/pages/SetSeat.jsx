import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function SetSeat() {

  const date = [];
  for (let i = 1; i < 31; i++) {
    date.push(i);
  }

  return (
    <>
      <Navbar withcroll={false} />
      <div className="pt-24">
        <div className=" bg-white drop-shadow-xl w-full h-[20vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold">Take a Seat</h1>
        </div>
        <div className="bg-white w-80% h-full my-12 mx-32 rounded-3xl border shadow-md flex justify-center py-12">
          <div className="inline-grid grid-cols-3 gap-4">
            {date.map((item) => (
              <div className="w-20 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75">
                <h1 className="pt-2 font-light">{item} A</h1>
              </div>
            ))}
          </div>
          <div className="inline-grid grid-cols-3 gap-4 ml-20">
            {date.map((item) => (
              <div className="w-20 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75">
                <h1 className="pt-2 font-light">{item} B</h1>
              </div>
            ))}
          </div>
          <div className="inline-grid grid-cols-3 gap-4 ml-20">
            {date.map((item) => (
              <div className="w-20 h-10 border-2 rounded-lg text-gray-500 drop-shadow-md flex justify-center items-center cursor-pointer hover:bg-sky-500 hover:text-white hover:border-none duration-75">
                <h1 className="pt-2 font-light">{item} C</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SetSeat;
