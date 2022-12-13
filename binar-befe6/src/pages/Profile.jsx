import React from "react";
import Navbar from "../components/Navbar";

import { Avatar } from "flowbite-react";
import Footer from "../components/footer";

function Profile() {
  let profile = localStorage.getItem("user");
  let image = localStorage.getItem("image");
  let gmail = localStorage.getItem("email");
  let token = localStorage.getItem("token");

  return (
    <>
      <Navbar />
      <div className=" bg-primary-100 w-full h-[50vh] rounded-b-[50px] lg:rounded-b-[100px] mb-44">
        <h1 className="lg:pt-44 pt-56 text-white text-center text-5xl uppercase tracking-widest">
          Profil Page
        </h1>
        <div className="mt-24 lg:mt-20 bg-white shadow-xl border border-slate-200/50 lg:mx-60 mx-8 my-12 rounded-3xl">
          <div className="flex w-full justify-between items-center lg:p-9 p-4 lg:px-20">
            <div className="flex items-center">
              <Avatar
                src={JSON.parse(image)}
                alt="User settings"
                rounded={true}
              />
              <p className="lg:text-xl text-lg pt-6 font-semibold text-gray-400 text-center ml-4">
                {JSON.parse(profile)}
              </p>
            </div>
            <p className="lg:text-md text-sm pt-5 font-semibold text-gray-400 text-center ml-4">
              {JSON.parse(gmail)}
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
