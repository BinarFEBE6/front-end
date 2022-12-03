import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { DatePicker, Select, Space, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

function Booking() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onPeople = (value) => {
    console.log("changed", value);
  };

  const navigate = useNavigate();

  return (
    <div className="h-[119vh] lg:h-0">
      <div className="bg-sky-500 flex justify-between ">
        <p className=" ml-3 mt-5 font-bold text-white text-[20px] lg:ml-[100px] lg:text-[30px]">
          Search Flight
        </p>
        <AiOutlineClose
          onClick={() => navigate(`/`)}
          className=" mr-3 cursor-pointer text-[25px]  mt-6 lg:text-[30px] lg:mr-[80px]"
        />
      </div>
      <div className="  mt-10 lg:mt-14">
        <p className="ml-5 text-[25px] font-bold lg:ml-[100px] lg:text-[30px]">
          Hay, Kamu Mau Jalan Jalan Kemana?
        </p>
      </div>

      <div className=" mt-5 lg:mt-14 ">
        <div className="ml-5 flex gap-1 lg:ml-[100px]">
          <GiCommercialAirplane className="text-sky-500 mt-5 text-[20px]" />
          <p className="font-bold mt-5">Flight</p>
        </div>
      </div>

      <div className=" ml-5 mt-8 -mb-3 lg:-mb-3 flex lg:ml-[105px]">
        <p className=" ml-2 text-[14px]">From</p>
        <p className=" ml-[170px] lg:ml-[305px]  text-[14px]">To</p>
        <p className="ml-[170px] lg:ml-[305px] hidden lg:block text-[14px]">
          Departing on
        </p>
      </div>

      <div className=" ml-5 lg:flex lg:ml-[100px]  ">
        <div className="flex items-center justify-between gap-2">
          <Select
            placeholder="Select Origin"
            className="lg:w-[300px] w-[150px]"
            size="large"
            onChange={handleChange}
            options={[
              {
                value: "bali",
                label: "Bali",
              },
              {
                value: "jakarta",
                label: "Jakarta",
              },
              {
                value: "bogor",
                label: "Bogor",
              },
              {
                value: "lhokseumawe",
                label: "Lhokseumawe",
              },
              {
                value: "bandung",
                label: "Bandung",
              },
            ]}
          />
          <HiOutlineSwitchHorizontal className=" bg-slate-300 text-[25px]  text-black rounded-full  " />
          <Select
            placeholder="Select Origin"
            className=" w-[150px] lg:w-[300px] mr-5"
            size="large"
            onChange={handleChange}
            options={[
              {
                value: "bali",
                label: "Bali",
              },
              {
                value: "jakarta",
                label: "Jakarta",
              },
              {
                value: "bogor",
                label: "Bogor",
              },
              {
                value: "lhokseumawe",
                label: "Lhokseumawe",
              },
              {
                value: "bandung",
                label: "Bandung",
              },
            ]}
          />
        </div>

        <div className="mt-10  lg:mt-0">
          <p className="ml-2 -mb-0 lg:ml-[305px] lg:hidden  text-[14px]">
            Departing on
          </p>
          <Space>
            <DatePicker
              className="w-[350px]  lg:w-[250px]"
              size="large"
              onChange={onChange}
            />
          </Space>
        </div>
      </div>

      <div className="ml-6 lg:ml-[105px] mt-10 -mb-3">
        <p className="text-[14px]">People</p>
      </div>
      <div className="ml-5 flex justify-between lg:block items-center lg:ml-[100px]">
        <InputNumber
          className="w-[150px]  lg:w-[150px]"
          size="large"
          min={1}
          max={10}
          defaultValue={1}
          onChange={onPeople}
        />
        <button className="font-bold text-white mr-5 lg:ml-[560px] w-[150px] h-[40px]   rounded-lg bg-gradient-to-l from-blue-600 to-blue-800">
          Search Filght
        </button>
      </div>
    </div>
  );
}

export default Booking;
