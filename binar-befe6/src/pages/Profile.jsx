import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Upload, message } from "antd";
import { Avatar } from "flowbite-react";
import Footer from "../components/footer";
import { DatePicker, Form, Input, Select } from "antd";
import { useRef } from "react";

const { TextArea } = Input;

function Profile() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const [edit, setEdit] = useState(false);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const fileInput = useRef(null);
  // const handleChange = (e) => {
  //   const file = fileInput.current.files[0];
  //   const fileName = file.name;
  //   const fileExtension = fileName.substr(fileName.lastIndexOf(".") + 1);
  //   const fileSize = file.size;

  //   if (fileExtension !== "png" && fileExtension !== "jpg") {
  //     alert("Only PNG and JPG files are allowed");
  //   }

  //   if (fileSize > 1000000) {
  //     alert("File size is too large");
  //   }
  // };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      alert("File size must be less than 1MB!");
    }
  };
  const beforUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M && true;
  };
  const [form] = Form.useForm();
  return (
    <>
      <Navbar />
      <div className=" bg-sky-700 w-full h-[50vh] rounded-b-[50px] lg:rounded-b-[100px]">
        <h1 className="lg:pt-44 pt-56 text-white text-center text-5xl uppercase tracking-widest">
          Profil Page
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="bg-white w-[90%] lg:w-[40%] h-full mt-[-5rem] mb-24 rounded-3xl border shadow-md p-16 lg:p-20">
          <Avatar alt="User settings" size="xl" />
          <div className="flex justify-center">
            {edit ? (
              <div className="mt-16">
                <Form
                  form={form}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <h1
                    className="text-md font-bold text-xl mb-6 text-gray-500"
                    onClick={() => setEdit()}
                  >
                    Gender / Name
                  </h1>
                  <div className="lg:flex gap-2 mb-4">
                    <Form.Item
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
                        style={{ width: "100%" }}
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
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input
                        className="border-gray-200 rounded-lg"
                        placeholder="Input your name !"
                      />
                    </Form.Item>
                  </div>

                  <h1 className="text-md font-bold text-xl mb-6 text-gray-500">
                    Date of Birth
                  </h1>
                  <Form.Item
                    name="dateOfBirth"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <DatePicker size="large" className="w-full mb-4" />
                  </Form.Item>

                  <h1 className="text-md font-bold text-xl mb-6 text-gray-500">
                    Address
                  </h1>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TextArea rows={4} className="mb-12" />
                  </Form.Item>
                  <Form.Item
                    name="profile"
                    rules={[
                      {
                        required: true,
                        message: "Please select a file!",
                      },
                      {
                        validator: (rule, value, callback) => {
                          if (
                            value &&
                            value.files &&
                            value.files[0].size > 1000000
                          ) {
                            callback("File size must be less than 1MB!");
                          } else {
                            callback();
                          }
                        },
                      },
                    ]}
                  >
                    <div className="flex justify-end">
                      <Input
                        type="file"
                        accept=".png,.jpg"
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <div className="flex justify-end">
                      <button
                        htmlType="submit"
                        className="lg:w-1/4 px-6 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                      >
                        Save
                      </button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              <div className="profile">
                <button
                  onClick={() => setEdit(true)}
                  className="w-24 p-3 bg-primary-100 text-white"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
