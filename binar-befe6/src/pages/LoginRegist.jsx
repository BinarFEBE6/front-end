import React, { useState } from "react";
import logo from "../assets/logo.png";

import logo2 from "../assets/logo2w.png";
import { Modal, Form } from "antd";
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { postRegister } from "../features/LoginRegister/registerSlice";
import { useNavigate } from "react-router-dom";
import { logIn } from "../features/LoginRegister/loginSlice";
function LoginRegist() {
  const dispatch = useDispatch();
  const [regist, setRegist] = useState();
  const navigate = useNavigate();

  const onRegist = async (values) => {
    try {
      dispatch(postRegister(values));
      setRegist(false);
    } catch (error) {}
  };

  const onLogin = async (values) => {
    try {
      dispatch(logIn(values));
      navigate("/");
    } catch (error) {}
  };
  const register = () => {
    setRegist(true);
  };
  return (
    <div className="login-section bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="side bg-primary-100 w-[90vw] h-[70vh] lg:w-[30vw] rounded-tl-xl rounded-bl-xl shadow-xl lg:flex hidden justify-center flex-col items-center">
        <h1 className="text-2xl text-white font-semibold">
          Lets Travel With Us
        </h1>
        <img src={logo2} alt="" className="w-40 mt-3" />
      </div>
      <div className="wrapper-box bg-white w-[90vw] h-[70vh] lg:w-[30vw] lg:rounded-tr-xl lg:rounded-br-xl rounded-xl drop-shadow-lg flex  justify-center">
        <div className="content  flex flex-col items-center ">
          <div className="logo flex flex-row justify-center items-center lg:mt-4 ">
            <img src={logo} alt="" className="w-20 mt-3" />
          </div>

          <div className="form w-[70vw] lg:w-[20vw] ">
            {regist ? (
              <div className="">
                <h1 className="text-center text-xl">Register</h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onRegist}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<AiOutlineMail className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <div className="text-sm font-medium text-gray-500 mt-6">
                    Have Account?{" "}
                    <p
                      className="text-blue-700 hover:underline dark:text-blue-500"
                      onClick={() => setRegist(false)}
                    >
                      Login
                    </p>
                  </div>
                  <Form.Item>
                    <div className="button fflex items-center  flex justify-between mt-4 space-x-4">
                      <button
                        htmlType="submit"
                        className="login-form-button bg-primary-100 rounded-xl w-full h-12 text-white text-sm"
                      >
                        Register
                      </button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              <div className="">
                <h1 className="text-center text-xl">Login</h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onLogin}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <div className="text-sm font-medium text-gray-500 mt-6">
                    Not registered?{" "}
                    <p
                      className="text-blue-700 hover:underline dark:text-blue-500 "
                      onClick={register}
                    >
                      Create account
                    </p>
                  </div>

                  <div className="button  items-center  flex flex-col mt-4 ">
                    <button
                      htmlType="submit"
                      className="login-form-button bg-primary-100 w-full h-12 rounded-xl text-white text-sm"
                    >
                      Log in
                    </button>
                    <h1>Or</h1>
                    <button
                      htmlType="submit"
                      className="login-form-button bg-gray-600 w-full h-12 rounded-xl text-white flex flex-row  justify-center items-center text-sm"
                    >
                      <FcGoogle size={20} className="mr-2" /> Log in With Google
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegist;