import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlane } from "react-icons/fa";
import { Navigation } from "swiper";
function Schedule() {
  return (
    <>
      <Navbar />
      <div className="schedule w-full h-full lg:w-full  flex justify-center items-center bg-slate-100 flex-col ">
        <div className="class bg bg-white w-[90vw] lg:w-[80vw] mb-7 justify-center flex mt-10 rounded-md shadow-xl">
          <h1 className="p-12 font-semibold text-xl text-center">
            Choose Your Planning Schedule
          </h1>
        </div>
        <div className="wrapper w-[90vw] h-fit lg:w-[80vw] bg-white shadow-xl rounded-md">
          <div className="schedule-wrapping  p-2 ">
            <div className="location flex flex-row space-x-5 ">
              <p className="text-xl text-gray-900 font-semibold">Jakarta</p>
              <FaPlane size={20} className="mt-2 text-gray-900" />
              <p className="text-xl text-gray-900 font-semibold">Jakarta</p>
            </div>
            <Swiper
              slidesPerView={3}
              style={{
                "--swiper-navigation-color": "rgb(250 202 21)",
              }}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 8,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 10,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper  px-2 lg:px-0 "
            >
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box w-28 h-28 bg-yellow-300 rounded-md border-x-2 border-gray-400">
                  1
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flight bg-white w-[90vw] h-[70vh] shadow-xl mt-7 lg:w-[80vw] rounded-md">
          <div className="class flex justify-center flex-col items-center">
            <div className="flight w-[95%] rounded-md h-20 bg-gray-200 mt-3">
              <div className="time">20.00</div>
            </div>

            <div className="flight w-[95%] rounded-md h-20 bg-gray-200 mt-3">
              <div className="time">20.00</div>
            </div>

            <div className="flight w-[95%] rounded-md h-20 bg-gray-200 mt-3">
              <div className="time">20.00</div>
            </div>

            <div className="flight w-[95%] rounded-md h-20 bg-gray-200 mt-3">
              <div className="time">20.00</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
