import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/footer";
import { DatePicker, Form, Input, Select } from "antd";

import axios from "axios";

const { TextArea } = Input;

function Profile() {
  const [user, setUser] = useState([]);
  const onFinish = async (fieldValue) => {
    const values = {
      ...fieldValue,
      birthDate: fieldValue["dateOfBirth"].format("YYYY-MM-DD"),
    };
    delete values.dateOfBirth;
    try {
      const req = await axios.put(
        "https://binar-academy-terbangin.herokuapp.com/api/user/edit_profile/update",
        values,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(req);
      console.log("Success:", values);
    } catch (error) {}

    // setEdit();
  };
  const [edit, setEdit] = useState(false);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const fileInput = useRef(null);
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

  // const handleChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file.size > 1000000) {
  //     alert("File size must be less than 1MB!");
  //   }
  // };
  // const beforUpload = (file) => {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     message.error("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error("Image must smaller than 2MB!");
  //   }
  //   return isJpgOrPng && isLt2M && true;
  // };
  const getProfile = async () => {
    try {
      const res = await axios.get(
        "https://binar-academy-terbangin.herokuapp.com/api/get/user/edit_profile",
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      setUser(res.data.data);
      console.log(res);
    } catch (error) {}
  };

  const updateProfile = async () => {
    try {
      const req = await axios.put(
        "https://binar-academy-terbangin.herokuapp.com/api/user/edit_profile/update",
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="h-screen">
      <Navbar withcroll={false} />

      <div className="flex justify-center items-center h-full ">
        <div className="bg-white lg:w-[60vw] w-[80vw] h-fit rounded-lg border shadow-md   ">
          <div className="">
            {edit ? (
              <div className="mt-16">
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
                  <h1
                    className="text-md font-bold text-xl mb-6 text-gray-500"
                    onClick={() => setEdit()}
                  >
                    Gender / Name
                  </h1>
                  <div className="lg:flex gap-2 mb-4">
                    <Form.Item
                      name="displayName"
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
                  {/* <Form.Item
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
                  </Form.Item> */}
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
              <div className="profile ">
                <div className="flex justify-start user border-l-4 border-primary-100 flex-row">
                  <h1 className="text-gray-700 font-semibold">
                    User Information
                  </h1>
                </div>
                <div className="user pl-3">
                  <div className="name">
                    <h1>Name</h1>
                    {user.displayName === null ? (
                      <h1 className="text-gray-700 font-light">Kosong</h1>
                    ) : (
                      <h1 className="text-gray-700 font-light">
                        {user.displayName}
                      </h1>
                    )}
                  </div>
                  <div className="gender">
                    <h1>Gender</h1>
                    {user.gender === null ? (
                      <h1 className="text-gray-700 font-light">Kosong</h1>
                    ) : (
                      <h1 className="text-gray-700 font-light">
                        {user.gender}
                      </h1>
                    )}

                    <div className="birthDate">
                      <h1>Birth Date</h1>
                      {user.birthDate === null ? (
                        <h1 className="text-gray-700 font-light">Kosong</h1>
                      ) : (
                        <h1 className="text-gray-700 font-light">
                          {user.birthDate}
                        </h1>
                      )}
                    </div>
                    <div className="addres">
                      <h1>Addres</h1>
                      {user.address === null ? (
                        <h1 className="text-gray-700 font-light">Kosong</h1>
                      ) : (
                        <h1 className="text-gray-700 font-light">
                          {user.address}
                        </h1>
                      )}
                    </div>
                  </div>
                </div>

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
    </div>
  );
}

export default Profile;
