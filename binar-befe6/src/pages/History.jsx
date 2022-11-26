import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function History() {
  return (
    <div className="bg-slate-200 ">
      <Navbar withcroll={false} />
      <div className="h-20"></div>
      <div className="  justify-center grid gap-2 mb-20">
        <div className="bg-white w-[250px] h-[80px] mt-5 rounded-lg lg:w-[800px] lg:h-[100px] ">
          <div className=" h-[100px] flex items-center justify-center ">
            <p className="text-2xl lg:text-4xl lg:mt-5 ">Riwayat Pesanan </p>
          </div>
        </div>

        {/* <div className="bg-white w-[800px] h-[700px] mt-5 "></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default History;
