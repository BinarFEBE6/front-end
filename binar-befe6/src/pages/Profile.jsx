import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { DatePicker, Form, Input, Select } from "antd";
import { Avatar } from "flowbite-react";
import axios from "axios";
const { TextArea } = Input;
function Profile() {
  const options = [
    { value: "Mr. ", text: "Mr ." },
    { value: "Mrs. ", text: "Mrs ." },
  ];
  const [displayName, setdisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [picture, setPicture] = useState(null);
  const [gender, setgender] = useState(options[0].value);
  const [foto, setfoto] = useState([]);

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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("displayName", displayName);
      formData.append("address", address);
      formData.append("birthDate", birthDate);
      formData.append("picture", picture);
      formData.append("gender", gender);

      await axios
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
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
      setfoto(res.data.data.user.profile);
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
        <div className="bg-white lg:w-[40vw] w-[80vw]  rounded-lg border shadow-md mt-20 mb-12">
          {edit ? (
            <div>
              <div className="head flex  items-start border-l-4 border-primary-100">
                <h1 className=" text-gray-700 font-semibold text-xl pl-2">
                  Update Profile
                </h1>
              </div>
              <div className="slicing flex  lg:py-7 py-4 space-y-6 justify-center w-fit pl-3 flex-col items-center">
                <form onSubmit={handleSubmit}>
                  <h1>Select Pictures</h1>
                  <input
                    type="file"
                    name="picture"
                    onChange={handleChange}
                    className="rounded-xl lg:w-[36vw] w-[60vw]"
                  />

                  <h1 className="mt-3">Name</h1>
                  <div className="flex flex-row space-x-3">
                    <select
                      name="gender"
                      className="rounded-l-lg"
                      value={gender}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="displayName"
                      className="w-32 rounded-r-lg lg:w-[20vw]"
                      value={displayName}
                      onChange={handleChange}
                    />
                  </div>

                  <h1 className="mt-3">Birth Date</h1>
                  <input
                    type="date"
                    name="birthDate"
                    className="rounded-lg w-fit"
                    value={birthDate}
                    max="2020-12-31"
                    onChange={handleChange}
                  />

                  <h1 className="mt-3">Address</h1>
                  <div className="flex flex-col">
                    <textarea
                      type="text"
                      value={address}
                      className="rounded-lg w-56 lg:w-[36vw] h-24"
                      name="address"
                      onChange={handleChange}
                    />
                    <div className="flex row w-full mt-3 justify-center space-x-3">
                      <button
                        onClick={() => setEdit()}
                        className="lg:w-1/4 px-6 mt-3 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-red-600 to-red-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="lg:w-1/4 px-6 mt-3 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-start user border-l-4 border-primary-100 flex-row">
                <h1 className="text-gray-700 font-semibold text-xl pl-2">
                  User Information
                </h1>
              </div>
              <div className="profile pl-4 pb-4 lg:grid lg:grid-cols-2">
                <div className="foto lg:hidden">
                  {foto == null ? (
                    <Avatar
                      alt="User settings"
                      rounded={true}
                      className="pr-4"
                    />
                  ) : (
                    <Avatar
                      alt="User settings"
                      rounded={true}
                      className="pr-4 mb-3"
                      size="xl"
                      img={`${foto && foto.length !== null && foto}`}
                    />
                  )}
                </div>
                <div className="user pl-3 col-span-1">
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
                <div className="foto hidden lg:flex">
                  {foto == null ? (
                    <Avatar
                      alt="User settings"
                      rounded={true}
                      className="pr-4"
                    />
                  ) : (
                    <Avatar
                      alt="User settings"
                      rounded={true}
                      className="pr-4 mb-3"
                      size="xl"
                      img={`${foto && foto.length !== null && foto}`}
                    />
                  )}
                </div>
                <div className="edit flex justify-start lg:mr-20 mr-7">
                  <button
                    onClick={() => setEdit(true)}
                    className="lg:w-1/2 px-6 lg:px-4 h-9 lg:h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
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
