import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

import { BsPersonFill } from "react-icons/bs";

import { Form, Input, Select, Tabs, DatePicker } from "antd";
import axios from "axios";

function GuestDetails() {
  const [country, setCountry] = useState([]);
  const [people, setPeople] = useState(null);

  const onFinish = (fieldValue) => {
    const values = {
      ...fieldValue,
      dateOfBirth: fieldValue["dateOfBirth"].format("YYYY-MM-DD"),
      dateEndPassport: fieldValue["dateEndPassport"].format("YYYY-MM-DD"),
    };
    console.log("Success:", values);
    alert("Succes Submit !")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setPeople(value);
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
        `https://febe6.up.railway.app/api/getCountry`
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

  return (
    <>
      <Navbar withcroll={false} />
      <div className="pt-24">
        <div className=" bg-white drop-shadow-xl w-full h-[20vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold">Guest Details</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-white w-[40%] h-full my-12 rounded-3xl border shadow-md p-10 flex justify-between items-center">
            <h1 className="text-gray-500 font-bold">
              How many Guest to get Ticket's ?
            </h1>
            <Select
              placeholder="Select here"
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
        <div className="bg-white w-80% h-full mb-12 mx-32 rounded-3xl border shadow-md overflow-y-auto">
          <div className="flex px-48 py-12">
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
                      <div className="ml-8">
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
                          <div className="flex gap-3">
                            <Form.Item
                              label="Mr/Mrs"
                              name="gender"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Mr/Mrs"
                                size="large"
                                style={{ width: 105 }}
                                options={[
                                  {
                                    label: "Mr.",
                                    value: "male",
                                  },
                                  {
                                    label: "Mrs.",
                                    value: "female",
                                  },
                                ]}
                              />
                            </Form.Item>
                            <Form.Item
                              label="First Name"
                              name="firstName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your first name!",
                                },
                              ]}
                            >
                              <Input
                                className="border-gray-200 rounded-lg"
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
                                className="border-gray-200 rounded-lg"
                                placeholder="Last Name"
                              />
                            </Form.Item>
                          </div>

                          <h1 className="text-md font-semibold">
                            Date of Birth
                          </h1>
                          <div className="flex gap-3">
                            <Form.Item
                              label="Input date of your Birth Date !"
                              name="dateOfBirth"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <DatePicker />
                            </Form.Item>
                          </div>

                          <h1 className="text-md font-semibold">Nationality</h1>
                          <Form.Item
                            label="Select your Nationality !"
                            name="Nationality"
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
                            />
                          </Form.Item>

                          <h1 className="text-md font-semibold">Country</h1>
                          <Form.Item
                            label="Select Country you Live in !"
                            name="Country"
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
                            />
                          </Form.Item>

                          <h1 className="text-md font-semibold">Passport ID</h1>
                          <Form.Item
                            label="Input your Passport ID !"
                            name="Passport"
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
                            />
                          </Form.Item>

                          <h1 className="text-md font-semibold">
                            End Passport
                          </h1>
                          <div className="flex gap-3">
                            <Form.Item
                              label="Input date of your End Passport !"
                              name="dateEndPassport"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <DatePicker />
                            </Form.Item>
                          </div>

                          <h1 className="text-2xl mt-5 mb-9 font-bold">
                            Guest Contact
                          </h1>

                          <h1 className="text-md font-semibold">Name</h1>
                          <p>Input your contact name !</p>
                          <div className="flex gap-3">
                            <Form.Item
                              label="Mr/Mrs"
                              name="genderContact"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Mr/Mrs"
                                size="large"
                                style={{ width: 105 }}
                                options={[
                                  {
                                    label: "Mr.",
                                    value: "male",
                                  },
                                  {
                                    label: "Mrs.",
                                    value: "female",
                                  },
                                ]}
                              />
                            </Form.Item>
                            <Form.Item
                              label="First Name"
                              name="firstNameContact"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your first name!",
                                },
                              ]}
                            >
                              <Input
                                className="border-gray-200 rounded-lg"
                                placeholder="First Name"
                              />
                            </Form.Item>
                            <Form.Item
                              label="Last Name"
                              name="lastNameContact"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your last name!",
                                },
                              ]}
                            >
                              <Input
                                className="border-gray-200 rounded-lg"
                                placeholder="Last Name"
                              />
                            </Form.Item>
                          </div>

                          <h1 className="text-md font-semibold">Email</h1>
                          <Form.Item
                            label="Input your Email Guest Contact !"
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
                              className="border-gray-200 rounded-lg"
                              placeholder="Email"
                            />
                          </Form.Item>

                          <h1 className="text-md font-semibold">
                            Phone Number
                          </h1>
                          <Form.Item
                            name="phone"
                            label="Input your Phone Number Guest Contact !"
                            rules={[
                              {
                                required: true,
                                message: "Please input your phone number!",
                              },
                            ]}
                          >
                            <Input
                              className="border-gray-200 rounded-lg mb-8"
                              placeholder="Phone Number"
                            />
                          </Form.Item>

                          <Form.Item>
                            <button
                              htmlType="submit"
                              className="w-1/4 px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuestDetails;
