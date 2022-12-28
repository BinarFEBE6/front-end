import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";

import { guestDetails } from "../features/guestDetailsSlice";

import {
  Form,
  Input,
  Select,
  Tabs,
  DatePicker,
  Steps,
  notification,
} from "antd";

import { BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";
import { AiFillCheckCircle, AiFillSchedule } from "react-icons/ai";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import Swal from "sweetalert2";

function GuestDetails() {
  const [country, setCountry] = useState([]);
  const [people, setPeople] = useState(null);

  const departure = JSON.parse(localStorage.getItem("departure"));
  const arrival = JSON.parse(localStorage.getItem("arrival"));

  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (fieldValue) => {
    const values = {
      ...fieldValue,
      birthDate: fieldValue["dateOfBirth"].format("YYYY-MM-DD"),
      endPassport: fieldValue["dateEndPassport"].format("YYYY-MM-DD"),
    };

    delete values.dateOfBirth;
    delete values.dateEndPassport;

    try {
      dispatch(guestDetails(values));
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value) => {
    setPeople(value);
    localStorage.setItem("people", JSON.stringify(value));
  };

  const date = [];
  for (let i = 1; i < 32; i++) {
    date.push({
      value: i,
      label: i,
    });
  }

  const year = [];
  for (let i = 1950; i < 2040; i++) {
    year.push({
      value: i,
      label: i,
    });
  }

  const getCountry = async () => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getCountry`
      );
      setCountry(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  const option = country.map((item) => ({
    value: `${item.countryName}`,
    label: `${item.countryName}`,
  }));

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const guest = JSON.parse(localStorage.getItem("people"));
    const guestId = JSON.parse(localStorage.getItem("guestId"));
    console.log(guestId);

    if (guestId === null || !(guestId instanceof Array)) {
      api.info({
        message: `Hello there...`,
        description: "You haven't filled all the data",
        placement: "topRight",
      });
    } else if (guestId.length < guest) {
      api.info({
        message: `Hello there...`,
        description: `You haven't filled all the data, you just filled ${guestId.length} data`,
        placement: "topRight",
      });
    } else if (guestId.length === guest) {
      navigate("/setSeat");
      window.scroll(0, 0);
    }
  };

  return (
    <>
      {token ? (
        <>
          <Navbar withcroll={false} />

          <div className="bg-gray-100 pt-28 w-full">
            <div className="lg:px-48 px-5 pb-10">
              <Steps
                responsive={false}
                items={[
                  {
                    title: (
                      <h1 className="text-blue-500 lg:block hidden">
                        Schedule
                      </h1>
                    ),
                    status: "finish",
                    icon: (
                      <AiFillSchedule
                        className="text-3xl text-blue-500 cursor-pointer hover:scale-110 duration-300"
                        onClick={() =>
                          navigate(`/schedule/${departure}/${arrival}`)
                        }
                      />
                    ),
                  },
                  {
                    title: (
                      <h1 className="text-blue-500 lg:block hidden">
                        Guest Details
                      </h1>
                    ),
                    status: "process",
                    icon: (
                      <BsPersonPlusFill className="text-3xl text-blue-500" />
                    ),
                  },
                  {
                    title: (
                      <h1 className="text-blue-300 lg:block hidden">
                        Choose Seat
                      </h1>
                    ),
                    status: "wait",
                    icon: (
                      <MdAirlineSeatReclineExtra className="text-3xl text-blue-300" />
                    ),
                  },
                  {
                    title: (
                      <h1 className="text-blue-300 lg:block hidden">Done</h1>
                    ),
                    status: "wait",
                    icon: (
                      <AiFillCheckCircle className="text-3xl text-blue-300" />
                    ),
                  },
                ]}
              />
            </div>
          </div>

          <div className="pt-6">
            <div className=" bg-white drop-shadow-xl w-full h-[10vh] lg:h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
              <h1 className="text-3xl font-bold text-sky-700">Guest Details</h1>
            </div>
            <div className="flex justify-center">
              <div className="bg-white lg:w-[40%] w-[80%] h-full my-12 rounded-3xl border shadow-md p-10 flex justify-between items-center">
                <h1 className="text-gray-500 lg:font-bold mr-3">
                  How many Guest to get Ticket's ?
                </h1>
                <Select
                  defaultValue="1 People"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 1,
                      label: "1 People",
                    },
                    {
                      value: 2,
                      label: "2 People",
                    },
                    {
                      value: 3,
                      label: "3 People",
                    },
                    {
                      value: 4,
                      label: "4 People",
                    },
                    {
                      value: 5,
                      label: "5 People",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white w-[90%] lg:w-[60%] h-full mb-12 rounded-3xl border shadow-md overflow-y-auto">
                <div className="flex">
                  <Tabs
                    type="card"
                    tabPosition="left"
                    items={new Array(people).fill(null).map((_, i) => {
                      const id = String(i + 1);
                      return {
                        label: (
                          <span className="flex items-center">
                            <BsPersonFill className="mr-2" />
                            Guest {id}
                          </span>
                        ),
                        key: id,
                        children: (
                          <>
                            <div className="lg:ml-8  mt-6">
                              <Form
                                name="basic"
                                initialValues={{
                                  remember: true,
                                }}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                              >
                                <h1 className="text-md font-semibold">Name</h1>
                                <p>Input your name !</p>
                                <div className="lg:flex gap-3">
                                  <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your first name!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      className="border-gray-200 rounded-lg lg:w-full w-[85%]"
                                      placeholder="First Name"
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your last name!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      className="border-gray-200 rounded-lg lg:w-full w-[85%]"
                                      placeholder="Last Name"
                                    />
                                  </Form.Item>
                                </div>

                                <h1 className="text-md font-semibold">
                                  Date of Birth
                                </h1>
                                <div className="flex gap-3">
                                  <Form.Item
                                    label="Input Date of Birth Date here !"
                                    name="dateOfBirth"
                                    rules={[
                                      {
                                        required: true,
                                      },
                                    ]}
                                  >
                                    <DatePicker size="large" />
                                  </Form.Item>
                                </div>

                                <h1 className="text-md font-semibold">
                                  Nationality
                                </h1>
                                <Form.Item
                                  label="Select your Nationality !"
                                  name="nationality"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Select
                                    placeholder="Select Country"
                                    style={{ width: 180 }}
                                    options={option}
                                    size="large"
                                  />
                                </Form.Item>

                                <h1 className="text-md font-semibold">
                                  Country
                                </h1>
                                <Form.Item
                                  label="Select Country you Live in !"
                                  name="country"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Select
                                    placeholder="Select Country"
                                    style={{ width: 180 }}
                                    options={option}
                                    size="large"
                                  />
                                </Form.Item>

                                <h1 className="text-md font-semibold">
                                  Passport ID
                                </h1>
                                <Form.Item
                                  label="Input Passport ID here !"
                                  name="passport"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Input
                                    showCount
                                    maxLength={6}
                                    style={{ width: 180 }}
                                    size="large"
                                  />
                                </Form.Item>

                                <h1 className="text-md font-semibold">
                                  End Passport
                                </h1>
                                <div className="flex gap-3">
                                  <Form.Item
                                    label="Input Date End Passport here !"
                                    name="dateEndPassport"
                                    rules={[
                                      {
                                        required: true,
                                      },
                                    ]}
                                  >
                                    <DatePicker size="large" />
                                  </Form.Item>
                                </div>

                                <h1 className="text-2xl mt-5 mb-9 font-bold">
                                  Guest Contact
                                </h1>

                                <h1 className="text-md font-semibold">Name</h1>
                                <p>Input your contact name !</p>
                                <div className="lg:flex gap-3">
                                  <Form.Item
                                    label="First Name"
                                    name="guestFirstname"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your first name!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      className="border-gray-200 rounded-lg lg:w-full w-[85%]"
                                      placeholder="First Name"
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Last Name"
                                    name="guestLastname"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your last name!",
                                      },
                                    ]}
                                  >
                                    <Input
                                      className="border-gray-200 rounded-lg lg:w-full w-[85%]"
                                      placeholder="Last Name"
                                    />
                                  </Form.Item>
                                </div>

                                <h1 className="text-md font-semibold">Email</h1>
                                <Form.Item
                                  label="Input Email Here !"
                                  name="email"
                                  rules={[
                                    {
                                      required: true,
                                      type: "email",
                                      message: "Please input valid email !",
                                    },
                                  ]}
                                >
                                  <Input
                                    className="border-gray-200 rounded-lg lg:w-full w-[85%]"
                                    placeholder="Email"
                                  />
                                </Form.Item>

                                <h1 className="text-md font-semibold">
                                  Phone Number
                                </h1>
                                <Form.Item
                                  name="noTelp"
                                  label="Input Phone Number Here !"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Please input your phone number!",
                                    },
                                  ]}
                                  className="pb-6"
                                >
                                  <Input
                                    type="number"
                                    className="border-gray-200 rounded-lg lg:w-full w-[85%]"
                                    placeholder="Phone Number"
                                  />
                                </Form.Item>

                                <Form.Item>
                                  <button
                                    htmlType="submit"
                                    className="lg:w-1/4 px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                                  >
                                    Submit
                                  </button>
                                </Form.Item>
                              </Form>
                            </div>
                          </>
                        ),
                      };
                    })}
                  />
                </div>
                <div className="flex justify-center lg:justify-end lg:pr-16 py-16">
                  {contextHolder}
                  <button
                    onClick={() => openNotification()}
                    className="flex items-center p-3 lg:p-5 lg:px-4 lg:py-2 bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl cursor-pointer"
                  >
                    Continue
                    <HiArrowSmRight className="ml-2 mt-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        Swal.fire({
          icon: "error",
          title: "Oopps..!",
          text: "If you are not logged in, you can login first !",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        })
      )}
    </>
  );
}

export default GuestDetails;
