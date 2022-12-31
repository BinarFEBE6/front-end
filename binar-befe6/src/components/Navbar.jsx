import React, { useState, useEffect } from "react";
import { VscListFlat } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { IoIosNotifications } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
import logo from "../assets/logo.png";

import useScroll from "../hooks/useScroll";
import { Avatar } from "flowbite-react";
import { Dropdown, Tooltip } from "flowbite-react";

import { useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

function Navbar({ withcroll }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { scrollY } = useScroll();
  const [notif, setNotif] = useState([]);
  const [foto, setfoto] = useState([]);
  const [user, setuser] = useState([]);
  const notification = localStorage.getItem("notif");

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
      setfoto(res.data.data.user.profile);
      setuser(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getProfile();
  }, []);
  const getNotif = async () => {
    try {
      const respone = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/notification`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      setNotif(respone.data.data);
    } catch (error) {}
  };

  const navigate = useNavigate();

  const [sidebar, setsidebar] = useState(false);
  let token = JSON.parse(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.clear();

    navigate("/");
  };

  useEffect(() => {
    getNotif();
  }, []);

  const content = (
    <div className="max-h-[300px] overflow-auto px-2">
      <div className="header flex justify-center flex-row">
        <h1>Notification</h1>
      </div>
      {notif.length ? (
        <>
          {notif &&
            notif
              .map((item) => {
                return (
                  <div className="notif border-b border-t flex flex-row">
                    <p className="text-xs">
                      {item.content}{" "}
                      <span className="text-gray-500 text-[11px]">
                        {item.date.slice(0, 10)}
                      </span>
                    </p>
                  </div>
                );
              })
              .reverse()}
        </>
      ) : (
        <div className="none flex flex-col justify-center items-center">
          <IoNotificationsOffOutline
            className="mt-3 text-gray-700/50"
            size={15}
          />
          <p className="mt-3 text-gray-700/50 text-xs lg:text-md">
            No Notification yet
          </p>
        </div>
      )}
    </div>
  );
  return (
    <div>
      <div
        className={`${
          withcroll
            ? scrollY < 100
              ? "bg-transparen"
              : "bg-primary-100"
            : "bg-primary-100"
        }  w-full h-9 z-20 flex justify-center items-center fixed duration-300`}
      >
        <p
          className={`${
            withcroll ? (scrollY < 100 ? "text-white" : "text-white") : ""
          } text-white text-sm font-thin mt-2 duration-300 text-center`}
        >
          &#8226; Travel Everywhere Don't Worry Anywhere &#8226;
        </p>
      </div>

      <div
        className={`${
          sidebar ? "translate-x-0" : "translate-x-[100vw]"
        } bg-white h-40 w-48 fixed top-24 z-10 right-0 rounded-l-lg  duration-500 lg:hidden`}
      >
        <div className="text-center mt-4 grid gap-y-4">
          <p
            className="font-bold text-primary-100"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <a href="#about">
            <p className="font-bold text-sky-500">About</p>
          </a>
          <a href="#destination">
            <p className="font-bold text-primary-100">Destination</p>
          </a>
        </div>
      </div>

      <div
        className={`${
          withcroll
            ? scrollY < 100
              ? "bg-transparen"
              : "bg-white"
            : "bg-white"
        }  flex justify-between items-center h-14 fixed  w-full z-20 mt-8 duration-300 lg:px-10`}
      >
        <div className="logo flex items-center">
          <div className="image mr-3">
            <img
              src={logo}
              alt=""
              onClick={() => navigate(`/`)}
              className={`w-10 ml-3 mt-1`}
            />
          </div>
          <div className="brand flex flex-row">
            <p
              className={`${
                withcroll
                  ? scrollY < 100
                    ? "text-white"
                    : "text-primary-100"
                  : "text-primary-100"
              }  hidden lg:block text-xl mt-4 font-semibold`}
            >
              TerbangIn.
            </p>
          </div>
        </div>

        <div
          className={
            "lg:items-center gap-10 hidden lg:flex lg:justify-center z-20" +
            (navbarOpen ? "flex" : " hidden")
          }
        >
          <button
            className={`${
              withcroll
                ? scrollY < 100
                  ? "text-white"
                  : "text-primary-100"
                : "text-primary-100"
            } font-semibold mx-[40px] duration-300 cursor-pointer hover:text-sky-200`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <a href="#about">
            <button
              className={`${
                withcroll
                  ? scrollY < 100
                    ? "text-white"
                    : "text-primary-100"
                  : "text-primary-100"
              } font-semibold mx-[40px] duration-300 cursor-pointer hover:text-sky-200`}
            >
              About
            </button>
          </a>
          <a href="#destination">
            <button
              className={`${
                withcroll
                  ? scrollY < 100
                    ? "text-white"
                    : "text-primary-100"
                  : "text-primary-100"
              } font-semibold mx-[40px] duration-300 cursor-pointer hover:text-sky-200`}
            >
              Destination
            </button>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:mr-12">
          <div className="lg:flex items-center gap-2 hidden justify-center">
            {token && token.length ? (
              <div className="tr flex justify-center items-center">
                <Tooltip
                  style="light"
                  content={content}
                  placement="bottom"
                  trigger="click"
                  className="w-56"
                  animation="duration-500"
                >
                  <button className="relative">
                    {notification ? (
                      <div className="h-3 w-3 rounded-full bg-red-500 absolute top-2 left-2"></div>
                    ) : null}
                    <IoIosNotifications
                      size={37}
                      className={`
                          text-yellow-300 font-bold duration-300 mt-1 lg:mr-2`}
                      onClick={() => window.localStorage.removeItem("notif")}
                    />
                  </button>
                </Tooltip>

                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    foto == null ? (
                      <Avatar alt="User settings" rounded={true} className="" />
                    ) : (
                      <Avatar
                        alt="User settings"
                        rounded={true}
                        className=""
                        img={`${foto}`}
                      />
                    )
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      {JSON.parse(localStorage.getItem("user"))}
                    </span>
                  </Dropdown.Header>

                  <Dropdown.Item
                    onClick={() =>
                      navigate(`/Profile/${user.displayName}/${user.address}`)
                    }
                  >
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
              <div className="false flex items-center">
                <button
                  className={`${
                    withcroll
                      ? scrollY < 100
                        ? "text-white hover:text-sky-300"
                        : "text-primary-100 hover:text-sky-300"
                      : "text-primary-100"
                  } font-bold duration-300 flex`}
                  onClick={() => navigate("/login")}
                >
                  <BiLogIn className="mr-1" size={22} />
                  Login
                </button>
              </div>
            )}
          </div>
          <div className="navbar-Collapse lg:hidden text-white flex flex-row">
            <div className="flex gap-x-2 justify-center ml-6">
              {token && token.length ? (
                <div className=" flex">
                  <Tooltip
                    style="light"
                    content={content}
                    placement="bottom"
                    trigger="click"
                    animation="duration-500"
                    className="w-40 "
                  >
                    <button className="relative">
                      {notification ? (
                        <div className="h-3 w-3 rounded-full bg-red-500 absolute top-2 left-2"></div>
                      ) : null}
                      <IoIosNotifications
                        size={37}
                        className={`
                          text-yellow-300 font-bold duration-300 mt-1 lg:mr-2`}
                        onClick={() => window.localStorage.removeItem("notif")}
                      />
                    </button>
                  </Tooltip>

                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                      foto == null ? (
                        <Avatar
                          alt="User settings"
                          rounded={true}
                          className="mt-[0.4rem]"
                        />
                      ) : (
                        <Avatar
                          alt="User settings"
                          rounded={true}
                          className="mt-[0.4rem]"
                          img={`${foto}`}
                        />
                      )
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        <span className="block text-sm">
                          {JSON.parse(localStorage.getItem("user"))}
                        </span>
                      </span>
                    </Dropdown.Header>

                    <Dropdown.Item
                      onClick={() =>
                        navigate(`/Profile/${user.displayName}/${user.address}`)
                      }
                    >
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
                </div>
              ) : (
                <div className="false flex items-center pl-2">
                  <button
                    className={`${
                      withcroll
                        ? scrollY < 100
                          ? "text-white hover:text-sky-300"
                          : "text-sky-500 hover:text-sky-300"
                        : "text-sky-500"
                    }  font-bold pt-0.5 flex`}
                    onClick={() => navigate("/login")}
                  >
                    <BiLogIn className="mr-1" size={22} />
                    Login
                  </button>
                </div>
              )}
              {sidebar ? (
                <div className="flex items-center">
                  <AiOutlineClose
                    className={`${
                      withcroll
                        ? scrollY < 100
                          ? "text-white"
                          : "text-sky-500"
                        : "text-sky-500"
                    }  duration-300 mr-3`}
                    size={22}
                    onClick={() => setsidebar(false)}
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <VscListFlat
                    className={`${
                      withcroll
                        ? scrollY < 100
                          ? "text-white"
                          : "text-sky-500"
                        : "text-sky-500"
                    }  duration-300 mr-3 `}
                    size={22}
                    onClick={() => {
                      setNavbarOpen(!navbarOpen);
                      setsidebar(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
