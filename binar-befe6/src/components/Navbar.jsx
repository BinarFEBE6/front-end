import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { VscListFlat } from "react-icons/vsc";
import { Modal, Form } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

function Navbar() {
  const [show, setShow] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showRegist, setShowRegist] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const isShow = () => {
    setShow(true);
    setShowRegist();
  };
  const isShowRegist = () => {
    setShowRegist(true);
    setShow();
  };
  const isClosed = () => {
    setShow();
  };
  const isClosedRegist = () => {
    setShowRegist();
  };

  return (
    <div>
      <div className="bg-transparent flex justify-between absolute w-full z-10 mt-10 ">
        <div className=" ml-7 lg:ml-32 mb-3 bg-red-400 mt-3 w-20 h-9"></div>

        <div
          className={
            "lg:items-center lg:pt-4 gap-10 lg:flex" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <p className="font-bold text-neutral-50">Home</p>
          <p className="font-bold text-neutral-50">Booking</p>
          <p className="font-bold text-neutral-50">About</p>
        </div>
        <div className="flex items-center gap-2 lg:mr-12">
          <div className="flex items-center gap-2">
            <FaUserCircle className=" text-neutral-50 w-7 h-7" />
            <button className="font-bold text-neutral-50" onClick={isShow}>
              Login
            </button>
          </div>
          <div
            className="navbar-Collapse lg:hidden text-white text-2xl"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <VscListFlat />
          </div>
          {/* Modal Login */}
          <div className="modal-login">
            <Modal
              open={show}
              title="Login"
              onCancel={isClosed}
              footer=""
              width={400}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
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
                  <a
                    className="text-blue-700 hover:underline dark:text-blue-500"
                    onClick={isShowRegist}
                  >
                    Create account
                  </a>
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
            </Modal>
          </div>
          {/* Modal Register */}
          <div className="modal-login">
            <Modal
              open={showRegist}
              title="Register"
              onCancel={isClosedRegist}
              footer=""
              width={400}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
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
                    prefix={<MailOutlined className="site-form-item-icon" />}
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
                  <a
                    className="text-blue-700 hover:underline dark:text-blue-500"
                    onClick={isShow}
                  >
                    Login
                  </a>
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
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
