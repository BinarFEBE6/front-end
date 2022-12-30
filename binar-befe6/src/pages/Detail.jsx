import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
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
            <>
              <div className="pt-20"></div>
              <div className="w-full h-full bg-slate-200 text-black pt-5 lg:pt-7">
                <div className="pt-10 lg:pt-12 pb-16 px-10 lg:flex">
                  <img
                    className="w-[350px] h-full rounded-xl lg:h-[400px] lg:w-[500px] xl:h-[500px] xl:w-[800px] object-cover  "
                    src={object.image}
                    alt="national"
                  />
                  <div className="flex justify-center">
                    <div className="pt-10 lg:px-10 px-2">
                      <p className="text-center  font-bold text-[40px]">
                        {object.Country}
                      </p>
                      <p className="pt-3 text-[18px] font-semibold">
                        {object.Landmark}
                      </p>
                      <p className="pt-3 text-justify ml-[20px] text-[16px] font-semibold">
                        {object.Description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          <Footer />
      </div>
    </div>
  );
}

export default Detail;
