import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Modal, Form } from "antd";
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";
function LoginRegist() {
  const [regist, setRegist] = useState();
  const register = () => {
    setRegist(true);
  };
  return (
    <div className="login-section bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="wrapper-box bg-white w-[90vw] h-[80vh] rounded-xl shadow-xl flex  justify-center">
        <div className="content  flex flex-col items-center">
          <img src={logo} alt="" className="w-20 mt-3" />
          <h1 className="text-xl text-gray-700 font-semibold">Travelin.</h1>

          <div className="form w-[70vw] ">
            {regist ? (
              <div className="">
                {/* <h1 className="text-center text-xl">Register</h1> */}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onLogin}
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
                      <Button
                        htmlType="submit"
                        className="login-form-button bg-yellow-500 w-full h-12 text-white"
                      >
                        Register
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              <div className="">
                {/* <h1 className="text-center text-xl">Login</h1> */}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onLogin}
                >
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
                  <Form.Item>
                    <div className="button fflex items-center  flex justify-between mt-4 space-x-4">
                      <Button
                        htmlType="submit"
                        className="login-form-button bg-yellow-500 w-full h-12 text-white"
                      >
                        Log in
                      </Button>
                      <Button
                        htmlType="submit"
                        className="login-form-button bg-teal-500  w-full h-12 text-white"
                      >
                        Log With Google
                      </Button>
                    </div>
                  </Form.Item>
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
