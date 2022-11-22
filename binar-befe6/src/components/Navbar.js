import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="bg-teal-400 h-14 flex justify-between ">
        <div className="  ml-32 mb-3 bg-red-400 mt-3 w-20 "></div>
        <div className="flex items-center gap-10">
          <p className="font-bold text-neutral-50">Book</p>
          <p className="font-bold text-neutral-50">Manage</p>
          <p className="font-bold text-neutral-50">Travel Info</p>
          <p className="font-bold text-neutral-50">Explore</p>
          <p className="font-bold text-neutral-50">About</p>
        </div>
        <div className="flex items-center gap-2 mr-12">
          <div className="flex items-center gap-2">
            <FaUserCircle className=" text-neutral-50 w-7 h-7" />
            <button className="font-bold text-neutral-50">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
