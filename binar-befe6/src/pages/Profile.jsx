import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/footer";
import { DatePicker, Form, Input, Select } from "antd";

import axios from "axios";

const { TextArea } = Input;

function Profile() {
  const [displayName, setdisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [picture, setPicture] = useState(null);
  const [gender, setgender] = useState();

  const handleChange = (event) => {
    if (event.target.name === "displayName") {
      setdisplayName(event.target.value);
    } else if (event.target.name === "address") {
      setAddress(event.target.value);
    } else if (event.target.name === "birthDate") {
      setbirthDate(event.target.value);
    } else if (event.target.name === "picture") {
      setPicture(event.target.files[0]);
    } else if (event.target.name === "gender") {
      setgender(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("displayName", displayName);
    formData.append("address", address);
    formData.append("birthDate", birthDate);
    formData.append("picture", picture);
    formData.append("gender", gender);

    axios
      .put(
        "https://binar-academy-terbangin.herokuapp.com/api/user/edit_profile/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  const [data, setData] = useState([]);
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
      window.location.reload();
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
      setData(res.data.data);
      console.log(res.data.data);
    } catch (error) {}
  };

  // const updateProfile = async () => {
  //   try {
  //     const req = await axios.put(
  //       "https://binar-academy-terbangin.herokuapp.com/api/user/edit_profile/update",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${JSON.parse(
  //             localStorage.getItem("token")
  //           )}`,
  //         },
  //       }
  //     );
  //     console.log(req);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex justify-center items-center lg:h-full h-[100%] flex-col">
        {/* <div className=" bg-white drop-shadow-xl w-full h-[15vh] rounded-b-[50px] lg:rounded-b-[180px] flex items-center justify-center mb-6 mt-11">
          <h1 className="text-3xl font-medium  text-sky-700">
            User Information
          </h1>
        </div> */}
        <div className="bg-white lg:w-[40vw] w-[80vw]  rounded-lg border shadow-md mt-20 mb-12 ">
          {edit ? (
            <div className="slicing flex justify-center lg:py-7 flex-col items-center">
              {/* <div className=" ">
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
                  <h1 className="text-md font-bold text-lg mt-3 text-gray-500">
                    Gender / Name
                  </h1>
                  <div className="flex lg:flex-row flex-col lg:gap-2 ">
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
              
                        size="middle"
                        options={[
                          {
                            label: "Mr.",
                            value: "Mr.",
                          },
                          {
                            label: "Mrs.",
                            value: "Mrs.",
                          },
                        ]}
                      />
                    </Form.Item>
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
                        size="middle"
                        className="border-gray-200 rounded-lg"
                        placeholder="Input your name !"
                      />
                    </Form.Item>
                  </div>

                  <h1 className="text-md font-bold text-lg  text-gray-500">
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
                    <DatePicker className="w-full " />
                  </Form.Item>

                  <h1 className="text-md font-bold text-lg mb-2 text-gray-500">
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
                    <TextArea rows={4} className="" />
                  </Form.Item>
                  <div className="save flex flex-row justify-center gap-1">
                    <div className="cancel">
                      <button
                        onClick={() => setEdit()}
                        className="lg:w-32 px-6 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-red-600 to-red-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                      >
                        Cancel
                      </button>
                    </div>
                    <Form.Item>
                      <div className="flex">
                        <button
                          htmlType="submit"
                          className="lg:w-32 px-6 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                        >
                          Save
                        </button>
                      </div>
                    </Form.Item>
                  </div>
                </Form>
              </div> */}
              <div className="head">
                <h1>Update Profile</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="picture">
                  <h1>Select Pictures</h1>
                  <input type="file" name="picture" onChange={handleChange} />
                </div>
                <div className="displayName">
                  <h1>Name</h1>
                  <select name="gender" onChange={handleChange}>
                    <option value="Mr. ">Mr. </option>
                    <option value="Mrs. ">Mrs. </option>
                  </select>
                  <input
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                  />
                </div>
                <div className="birthDate">
                  <h1>BirthDate</h1>
                  <input
                    type="date"
                    name="birthDate"
                    value={birthDate}
                    max="2020-12-31"
                    onChange={handleChange}
                  />
                </div>
                <div className="addres">
                  <h1>Address</h1>
                  <input
                    type="text"
                    value={address}
                    name="address"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Kirim</button>
              </form>
            </div>
          ) : (
            <>
              <div className="flex justify-start user border-l-4 border-primary-100 flex-row">
                <h1 className="text-gray-700 font-semibold text-xl pl-2">
                  User Information
                </h1>
              </div>
              <div className="profile pl-4 pb-4 ">
                <div className="user pl-3">
                  <div className="username">
                    <h1>Username</h1>
                    <h1 className="text-gray-700 font-light lg:text-xl ">
                      {" "}
                      {data && data.length !== 0 && data.user.username}
                    </h1>
                  </div>
                  <div className="email">
                    <h1>Email</h1>
                    <h1 className="text-gray-700 font-light lg:text-xl">
                      {data && data.length !== 0 && data.user.email}
                    </h1>
                  </div>
                  <div className="name">
                    <h1>Name</h1>
                    {data.displayName === null ? (
                      <h1 className="text-gray-700 font-light lg:text-xl">
                        Not Set
                      </h1>
                    ) : (
                      <h1 className="text-gray-700 font-light lg:text-xl">
                        {data.gender} {data.displayName}
                      </h1>
                    )}
                  </div>

                  <div className="birthDate">
                    <h1>Birth Date</h1>
                    {data.birthDate === null ? (
                      <h1 className="text-gray-700 font-light lg:text-xl">
                        Not Set
                      </h1>
                    ) : (
                      <h1 className="text-gray-700 font-light lg:text-xl">
                        {data.birthDate}
                      </h1>
                    )}
                  </div>
                  <div className="addres">
                    <h1>Addres</h1>
                    {data.address === null ? (
                      <h1 className="text-gray-700 font-light lg:text-xl">
                        Not Set
                      </h1>
                    ) : (
                      <h1 className="text-gray-700 font-light lg:text-xl">
                        {data.address}
                      </h1>
                    )}
                  </div>
                </div>
                <div className="edit flex justify-end lg:mr-20 mr-7">
                  <button
                    onClick={() => setEdit(true)}
                    className="lg:w-1/4 px-6 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
