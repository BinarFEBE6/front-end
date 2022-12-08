import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

import { BsPersonFill } from "react-icons/bs";

import { Form, Input, Select, Tabs, DatePicker } from "antd";

function GuestDetails() {
  const onFinish = (fieldValue) => {
    const values = {
      ...fieldValue,
      dateOfBirth: fieldValue["dateOfBirth"].format("YYYY-MM-DD"),
      dateEndPassport: fieldValue["dateEndPassport"].format('YYYY-MM-DD')
    };
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (dateString) => {
    console.log(dateString);
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

  return (
    <>
      <Navbar withcroll={false} />
      <div className="pt-24">
        <div className=" bg-white drop-shadow-xl w-full h-[20vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center">
          <h1 className="text-3xl font-bold">Guest Details</h1>
        </div>
        <div className="bg-white w-80% h-full my-12 mx-32 rounded-3xl border shadow-md overflow-y-auto">
          <div className="flex px-48 py-12">
            <Tabs
              defaultActiveKey="1"
              tabPosition="left"
              items={[
                {
                  label: (
                    <span className="flex items-center">
                      <BsPersonFill className="mr-2" />
                      Guest 1
                    </span>
                  ),
                  key: "1",
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
                          u
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
                            {/* <Form.Item
                              label="Date"
                              name="dateOfBirth"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Date"
                                style={{ width: 120 }}
                                options={date}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Month"
                              name="monthOfBirth"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Month"
                                style={{ width: 120 }}
                                options={[
                                  {
                                    label: "January",
                                    value: "January",
                                  },
                                  {
                                    label: "February",
                                    value: "February",
                                  },
                                  {
                                    label: "March",
                                    value: "March",
                                  },
                                  {
                                    label: "April",
                                    value: "April",
                                  },
                                  {
                                    label: "June",
                                    value: "June",
                                  },
                                  {
                                    label: "July",
                                    value: "July",
                                  },
                                  {
                                    label: "August",
                                    value: "August",
                                  },
                                  {
                                    label: "September",
                                    value: "September",
                                  },
                                  {
                                    label: "October",
                                    value: "October",
                                  },
                                  {
                                    label: "November",
                                    value: "November",
                                  },
                                  {
                                    label: "December",
                                    value: "December",
                                  },
                                ]}
                              />
                            </Form.Item> */}
                            {/* <Form.Item
                              label="Year"
                              name="yearOfBirth"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Year"
                                style={{ width: 120 }}
                                options={year}
                              />
                            </Form.Item> */}
                            <Form.Item
<<<<<<< HEAD
                              label="DateOfBirth"
                              name="DateOfBirth"
=======
                              label="Input date of your Birth Date !"
                              name="dateOfBirth"
>>>>>>> ab00f73efdfffaa24cf93e9cb25bb289778cb04b
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
<<<<<<< HEAD
                              <DatePicker
                                bordered={false}
                                onChange={onChange}
                              />
=======
                              <DatePicker />
>>>>>>> ab00f73efdfffaa24cf93e9cb25bb289778cb04b
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
                              options={[
                                {
                                  label: "Indonesia",
                                  value: "Indonesia",
                                },
                                {
                                  label: "Malaysia",
                                  value: "Malaysia",
                                },
                                {
                                  label: "Singapore",
                                  value: "Singapore",
                                },
                                {
                                  label: "Thailand",
                                  value: "Thailand",
                                },
                                {
                                  label: "Myanmar",
                                  value: "Myanmar",
                                },
                                {
                                  label: "Cambodia",
                                  value: "Cambodia",
                                },
                                {
                                  label: "Vietnam",
                                  value: "Vietnam",
                                },
                                {
                                  label: "Laos",
                                  value: "Laos",
                                },
                                {
                                  label: "Philippines",
                                  value: "Philippines",
                                },
                              ]}
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
                              options={[
                                {
                                  label: "Indonesia",
                                  value: "Indonesia",
                                },
                                {
                                  label: "Malaysia",
                                  value: "Malaysia",
                                },
                                {
                                  label: "Singapore",
                                  value: "Singapore",
                                },
                                {
                                  label: "Thailand",
                                  value: "Thailand",
                                },
                                {
                                  label: "Myanmar",
                                  value: "Myanmar",
                                },
                                {
                                  label: "Cambodia",
                                  value: "Cambodia",
                                },
                                {
                                  label: "Vietnam",
                                  value: "Vietnam",
                                },
                                {
                                  label: "Laos",
                                  value: "Laos",
                                },
                                {
                                  label: "Philippines",
                                  value: "Philippines",
                                },
                              ]}
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
                            {/* <Form.Item
                              label="Date"
                              name="dateOfEndPassport"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Date"
                                style={{ width: 120 }}
                                options={date}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Month"
                              name="monthOfEndPassport"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Month"
                                style={{ width: 120 }}
                                options={[
                                  {
                                    label: "January",
                                    value: "January",
                                  },
                                  {
                                    label: "February",
                                    value: "February",
                                  },
                                  {
                                    label: "March",
                                    value: "March",
                                  },
                                  {
                                    label: "April",
                                    value: "April",
                                  },
                                  {
                                    label: "June",
                                    value: "June",
                                  },
                                  {
                                    label: "July",
                                    value: "July",
                                  },
                                  {
                                    label: "August",
                                    value: "August",
                                  },
                                  {
                                    label: "September",
                                    value: "September",
                                  },
                                  {
                                    label: "October",
                                    value: "October",
                                  },
                                  {
                                    label: "November",
                                    value: "November",
                                  },
                                  {
                                    label: "December",
                                    value: "December",
                                  },
                                ]}
                              />
                            </Form.Item>
                            <Form.Item
                              label="Year"
                              name="yearOfEndPassport"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select
                                placeholder="Year"
                                style={{ width: 120 }}
                                options={year}
                              />
                            </Form.Item> */}
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
                            {/* <Button htmlType="submit" className="mt-8">
                              Submit
                            </Button> */}
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
                },
                {
                  label: `Tab 2`,
                  key: "2",
                  children: `Content of Tab Pane 2`,
                },
                {
                  label: `Tab 3`,
                  key: "3",
                  children: `Content of Tab Pane 3`,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuestDetails;
