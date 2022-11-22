import React from "react";
import travel from "../assets/travel.png";

function Travel() {
  return (
    <>
      <div className="travel-section lg:grid lg:grid-cols-2 p-5 lg:px-36 lg:justify-items-center lg:items-center text-gray-700 mt-5 ml-16">
        <div className="description">
          <h1 className="text-2xl font-bold text-center lg:text-left ">
            Why Everyone Flies
          </h1>
          <p className="text-md text-justify font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            sint aliquid est reprehenderit culpa autem nobis laboriosam soluta
            consectetur accusantium? Hic veniam earum neque adipisci cumque, ad
            sequi perferendis deserunt voluptatum, reprehenderit vel quia
            tempore ex aperiam. Ullam iusto autem, suscipit veritatis officia
            iure deleniti?
          </p>
        </div>
        <div className="image flex justify-center items-center">
          <img src={travel} alt="" className="w-[70%]" />
        </div>
      </div>
      <div className="border border-1 border-slate-400 w-3/4 mx-auto h-36 my-12 rounded-3xl">
        <div className="flex w-full justify-between p-16">
          <h1>Button</h1>
          <h1>Button</h1>
          <h1>Button</h1>
          <h1>Button</h1>
        </div>
      </div>
    </>
  );
}

export default Travel;
