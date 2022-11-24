import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { VscListFlat } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

import { Modal, Form } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import useScroll from "../hooks/useScroll";

function Navbar() {
  const [show, setShow] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showRegist, setShowRegist] = useState(false);
  const { scrollY } = useScroll();

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

  const [sidebar, setsidebar] = useState(false);
  console.log(sidebar);

  return (
    <div>
      <div
        className={`${
          scrollY < 200 ? "bg-transparen" : "bg-sky-500"
        } bg-transparent  w-full h-9 z-10 flex justify-center items-center fixed duration-300`}
      >
        <p
          className={`${
            scrollY < 200 ? "text-neutral-50" : "text-neutral-50"
          } text-neutral-50  mt-2 duration-300 text-center`}
        >
          Travel Gak Pakek Ribet
        </p>
      </div>

      <div
        onClick={() => setsidebar(false)}
        className={`${
          sidebar ? "translate-x-0" : "translate-x-[100vw]"
        } bg-white h-72 w-64 fixed top-10 z-20 right-0 rounded-l-lg  duration-500 lg:hidden`}
      >
        <div className="flex justify-between  mt-6 mr-7">
          <div></div>
          <div className="flex gap-x-2 justify-center ml-6">
            <FaUserCircle className="text-sky-500 h-6 w-6" />
            <button
              className={`${
                scrollY < 200 ? "text-neutral-50" : "text-sky-500"
              } font-bold duration-300`}
              onClick={isShow}
            >
              Login
            </button>
          </div>

          <AiOutlineClose className="font-bold h-6 w-6" />
        </div>
        <div className="text-center mt-12 grid gap-8">
          <p className="font-bold text-sky-500">Home</p>
          <p className="font-bold text-sky-500">Booking</p>
          <p className="font-bold text-sky-500">About</p>
        </div>
      </div>

      <div
        className={`${
          scrollY < 200 ? "bg-transparen" : "bg-white"
        } bg-transparent flex justify-between items-center h-12 fixed w-full z-10 mt-8 duration-300`}
      >
        <button className=" ml-7  mb-3 bg-sky-500 mt-3 w-20 h-9"></button>

        <div
          className={
            "lg:items-center lg:pt-4 gap-10 hidden lg:flex lg:justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <p
            className={`${
              scrollY < 200 ? "text-neutral-50" : "text-sky-500"
            } text-neutral-50 font-bold ml-8 duration-300`}
          >
            Home
          </p>
          <p
            className={`${
              scrollY < 200 ? "text-neutral-50" : "text-sky-500"
            }  font-bold ml-8 duration-300`}
          >
            Booking
          </p>
          <p
            className={`${
              scrollY < 200 ? "text-neutral-50" : "text-sky-500"
            } text-neutral-50 font-bold ml-8 duration-300`}
          >
            About
          </p>
        </div>

        <div className="flex items-center gap-2 lg:mr-12">
          <div className="lg:flex items-center gap-2 hidden">
            <FaUserCircle
              className={`${
                scrollY < 200 ? "text-neutral-50" : "text-sky-500"
              } text-neutral-50 w-7 h-7 duration-300`}
            />
            <button
              className={`${
                scrollY < 200 ? "text-neutral-50" : "text-sky-500"
              } font-bold duration-300`}
              onClick={isShow}
            >
              Login
            </button>
          </div>
          <div
            className="navbar-Collapse lg:hidden text-white text-2xl"
            onClick={() => {
              setNavbarOpen(!navbarOpen);
              setsidebar(true);
            }}
          >
            <VscListFlat
              className={`${
                scrollY < 200 ? "text-neutral-50" : "text-sky-500"
              } text-neutral-50 w-7 h-7 duration-300`}
            />
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
