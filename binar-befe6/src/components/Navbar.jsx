import React, { useState } from "react";
import { VscListFlat } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

import { IoIosNotifications } from "react-icons/io";
import logo from "../assets/logo.png";

import { useDispatch } from "react-redux";
import { Modal, Form } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import useScroll from "../hooks/useScroll";
import { logIn } from "../features/LoginRegister/loginSlice";
import { Avatar } from "flowbite-react";
import { Dropdown, Tooltip } from "flowbite-react";

import { useNavigate } from "react-router-dom";

import { postRegister } from "../features/LoginRegister/registerSlice";
import { postLoginGoogle } from "../features/LoginRegister/loginGoogle";

function Navbar({ withcroll }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showRegist, setShowRegist] = useState(false);
  const { scrollY } = useScroll();

  const navigate = useNavigate();

  const onLogin = (values) => {
    dispatch(logIn(values));
    setShow();
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
  let token = localStorage.getItem("token");
  let profile = localStorage.getItem("user");
  let image = localStorage.getItem("image");
  let gmail = localStorage.getItem("email");

  const handleLogout = () => {
    window.location.reload(1);
    localStorage.clear();
  };

  const onRegist = (values) => {
    dispatch(postRegister(values));
    setShowRegist();
  };

  const googleLogin = () => {
    dispatch(postLoginGoogle());
    setShow();
  };
  const content = (
    <div>
      <div className="header flex justify-center flex-row">
        <h1>Notification</h1>
      </div>

      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, eligendi.
      </p>
    </div>
  );
  return (
    <div>
      <div
        className={`${
          withcroll
            ? scrollY < 100
              ? "bg-transparen"
              : "bg-sky-500"
            : "bg-sky-500"
        }  w-full h-9 z-20 flex justify-center items-center fixed duration-300`}
      >
        <p
          className={`${
            withcroll
              ? scrollY < 100
                ? "text-neutral-50"
                : "text-neutral-50"
              : ""
          } text-neutral-50  mt-2 duration-300 text-center`}
        >
          Travel Gak Pakek Ribet
        </p>
      </div>

      <div
        className={`${
          sidebar ? "translate-x-0" : "translate-x-[100vw]"
        } bg-white h-40 w-48 fixed top-24 z-10 right-0 rounded-l-lg  duration-500 lg:hidden`}
      >
        <div className="text-center mt-4 grid gap-y-4">
          <p className="font-bold text-sky-500" onClick={() => navigate("/")}>
            Home
          </p>
          <p
            className="font-bold text-sky-500"
          >
            Booking
          </p>
          <p className="font-bold text-sky-500">About</p>
        </div>
      </div>

      <div
        className={`${
          withcroll
            ? scrollY < 100
              ? "bg-transparen"
              : "bg-white"
            : "bg-white"
        }  flex justify-between items-center h-12 fixed  w-full z-20 mt-8 duration-300`}
      >
        <div className="logo grid grid-cols-2  place-content-center">
          <div className="image">
            <img
              src={logo}
              alt=""
              onClick={() => navigate(`/`)}
              className={`  w-10 lg:w-10 lg:ml-12 ml-3 lg:mt-3 mt-1 `}
            />
          </div>
          <div className="brand flex flex-row">
            <p
              className={`${
                withcroll
                  ? scrollY < 100
                    ? "text-neutral-50"
                    : "text-sky-500"
                  : "text-sky-500"
              }  hidden lg:block ml-2  text-xl mt-4 font-semibold`}
            >
              Travelin
            </p>
            <span
              className={`${
                withcroll
                  ? scrollY < 100
                    ? "text-neutral-50"
                    : "text-sky-500"
                  : "text-sky-500"
              } text-neutral-50 hidden lg:block  ml-1 text-xl mt-4 font-semibold`}
            ></span>
          </div>
        </div>

        <div
          className={
            "lg:items-center gap-10 hidden lg:flex lg:justify-center z-20" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <button
            className={`${
              withcroll
                ? scrollY < 100
                  ? "text-neutral-50"
                  : "text-sky-500"
                : "text-sky-500"
            }  font-bold ml-8 duration-300 cursor-pointer hover:text-sky-200`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/setSeat")}
            className={`${
              withcroll
                ? scrollY < 100
                  ? "text-neutral-50"
                  : "text-sky-500"
                : "text-sky-500"
            }  font-bold ml-8 duration-300`}
          >
            Booking
          </button>
          <button
            className={`${
              withcroll
                ? scrollY < 100
                  ? "text-neutral-50"
                  : "text-sky-500"
                : "text-sky-500"
            }  font-bold ml-8 duration-300`}
          >
            About
          </button>
        </div>

        <div className="flex items-center gap-2 lg:mr-12">
          <div className="lg:flex items-center gap-2 hidden justify-center">
            {token && token.length ? (
              <div className="tr flex justify-center">
                <Tooltip
                  content={content}
                  placement="bottom"
                  trigger="click"
                  className="w-56"
                  animation="duration-500"
                >
                  <button>
                    <IoIosNotifications
                      size={37}
                      className={`
                          text-yellow-300 font-bold duration-300 mt-1 `}
                    />
                  </button>
                </Tooltip>

                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      src={JSON.parse(image)}
                      alt="User settings"
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{JSON.parse(profile)}</span>
                    <span className="block truncate text-sm font-medium">
                      {JSON.parse(gmail)}
                    </span>
                  </Dropdown.Header>

                  <Dropdown.Item onClick={() => navigate(`/Profile`)}>
                    Profile
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => navigate(`/History`)}>
                    History
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <button
                className={`${
                  withcroll
                    ? scrollY < 100
                      ? "text-neutral-50"
                      : "text-sky-500"
                    : "text-sky-500"
                } font-bold duration-300`}
                onClick={isShow}
              >
                Login
              </button>
            )}
          </div>
          <div className="navbar-Collapse lg:hidden text-white flex flex-row">
            <div className="flex gap-x-2 justify-center ml-6">
              {token && token.length ? (
                <div className=" flex ">
                  <Tooltip
                    content={content}
                    placement="bottom"
                    trigger="click"
                    animation="duration-500"
                    className="w-40 "
                  >
                    <IoIosNotifications
                      size={38}
                      className={`
                       text-yellow-300 font-bold duration-300 mt-1 `}
                    />
                  </Tooltip>

                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                      <Avatar
                        src={JSON.parse(image)}
                        alt="User settings"
                        rounded={true}
                        size="sm"
                        className="mt-[0.4rem]"
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        {JSON.parse(profile)}
                      </span>
                    </Dropdown.Header>

                    <Dropdown.Item onClick={() => navigate(`/Profile`)}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate(`/History`)}>
                      History
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                  {/* <p className="text-sky-500 text-lg ml-2 mt-3">
                    {JSON.parse(profile)}
                  </p> */}
                </div>
              ) : (
                <div className="false flex items-center">
                  <button
                    className={`${
                      withcroll
                        ? scrollY < 100
                          ? "text-neutral-50"
                          : "text-sky-500"
                        : "text-sky-500"
                    } text-neutral-50 font-bold`}
                    onClick={isShow}
                  >
                    Login
                  </button>
                </div>
              )}
              {sidebar ? (
                <AiOutlineClose
                  className={`${
                    withcroll
                      ? scrollY < 100
                        ? "text-neutral-50"
                        : "text-sky-500"
                      : "text-sky-500"
                  }  duration-300 mt-3`}
                  size={22}
                  onClick={() => setsidebar(false)}
                />
              ) : (
                <VscListFlat
                  className={`${
                    withcroll
                      ? scrollY < 100
                        ? "text-neutral-50"
                        : "text-sky-500"
                      : "text-sky-500"
                  }  duration-300 mt-3 `}
                  size={22}
                  onClick={() => {
                    setNavbarOpen(!navbarOpen);
                    setsidebar(true);
                  }}
                />
              )}
            </div>
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
                onFinish={onLogin}
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
                    className="text-blue-700 hover:underline dark:text-blue-500"
                    onClick={isShowRegist}
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
                      onClick={googleLogin}
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
                onFinish={onRegist}
              >
                <Form.Item
                  name="name"
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
                  <p
                    className="text-blue-700 hover:underline dark:text-blue-500"
                    onClick={isShow}
                  >
                    Login
                  </p>
                </div>
                <Form.Item>
                  <div className="button fflex items-center  flex justify-between mt-4 space-x-4">
                    <Button
                      htmlType="submit"
                      className=" bg-yellow-500 w-full h-12 text-white"
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
