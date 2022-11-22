import React from "react";
import travel from "../assets/travel.png";

function Travel() {
  return (
    <div className="travel-section lg:grid lg:grid-cols-2 p-5 lg:px-36 lg:justify-items-center lg:items-center text-gray-700">
      <div className="description  ">
        <h1 className="text-2xl font-bold text-center lg:text-left ">
          Why Everyone Flies
        </h1>
        <p className="text-md text-justify font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          sint aliquid est reprehenderit culpa autem nobis laboriosam soluta
          consectetur accusantium? Hic veniam earum neque adipisci cumque, ad
          sequi perferendis deserunt voluptatum, reprehenderit vel quia tempore
          ex aperiam. Ullam iusto autem, suscipit veritatis officia iure
          deleniti?
        </p>
      </div>
      <div className="image flex justify-center items-center">
        <img src={travel} alt="" className="w-[75%] lg:w-[50%]" />
      </div>
    </div>
  );
}

export default Travel;
