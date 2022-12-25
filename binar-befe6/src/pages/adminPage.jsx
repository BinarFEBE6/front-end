import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Form,
  Layout,
  Menu,
  DatePicker,
  theme,
  InputNumber,
  Cascader,
  Table,
} from "antd";

import { AiFillSchedule } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

import axios from "axios";
import { useDispatch } from "react-redux";
import { addSchedule } from "../features/addScheduleSlice";

const { Header, Content, Footer, Sider } = Layout;

const token = JSON.parse(localStorage.getItem("token"));

const AdminPage = () => {
  const [current, setCurrent] = useState("1");
  const [country, setCountry] = useState([]);
  const [categories, setCategories] = useState([]);
  const [scheduleTime, setScheduleTime] = useState([]);
  const [planes, setplanes] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = (fieldValue) => {
    const values = {
      ...fieldValue,
      date: fieldValue["dateAt"].format("YYYY-MM-DD"),
      departureAiport: fieldValue["from"][1],
      arrivalAirport: fieldValue["to"][1],
      maxSeat: 50,
    };

    delete values.dateAt;
    delete values.from;
    delete values.to;

    console.log("Success:", values);

    try {
      dispatch(addSchedule(values));
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleOutAdmin = () => {
    localStorage.clear();
    navigate("/");
  };

  const getCountry = async () => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getCountry`
      );
      setCountry(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getScheduleTime = async () => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getScheduleTime`
      );
      setScheduleTime(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getCategories`
      );
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlanes = async (token) => {
    try {
      const res = await axios.get(
        `https://binar-academy-terbangin.herokuapp.com/api/getAllPesawat`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setplanes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
    getScheduleTime();
    getCategories();
    getPlanes(token);
  }, []);

  const option = country.map((item) => ({
    value: `${item.countryName}`,
    label: `${item.countryName}`,
    children: item.city.map((data) => ({
      value: `${data.cityName}`,
      label: `${data.cityName}`,
    })),
    isLeaf: false,
  }));

  const dataSourcePlanes = planes.map((item) => ({
    key: `${item.id}`,
    id: `${item.id}`,
    name: `${item.name}`,
    airport: `${item.airport.name}`,
    city: `${item.airport.city.name}`,
    country: `${item.airport.city.country.name}`,
  }));

  const dataSourceCategories = categories.map((item) => ({
    key: `${item.id}`,
    id: `${item.id}`,
    categories: `${item.name}`,
  }));

  const dataSourceSchedule = scheduleTime.map((item) => ({
    key: `${item.id}`,
    id: `${item.id}`,
    day: `${item.day}`,
    departureTime: `${item.departureTime.slice(0, 5)}`,
    arrivalTime: `${item.arrivalTime.slice(0, 5)}`,
  }));

  const columnsPlanes = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Airport",
      dataIndex: "airport",
      key: "ariport",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
  ];

  const columnsCategories = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Categories",
      dataIndex: "categories",
      key: "categories",
    },
  ];

  const columnsScheduleTimes = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Departure Time",
      dataIndex: "departureTime",
      key: "departureTime",
    },
    {
      title: "Arrival Time",
      dataIndex: "arrivalTime",
      key: "arrivalTime",
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="flex items-center mx-8 mb-7">
          <img src={logo} alt="" className="w-7 h-7" />
          <p className="ml-2 text-xl mt-4 font-semibold text-sky-200">
            TerbangIn.
          </p>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          onClick={handleClick}
          defaultSelectedKeys={["1"]}
          selectedKeys={[current]}
        >
          <Menu.Item key="1" icon={<AiFillSchedule />}>
            Schedule
          </Menu.Item>
        </Menu>
        <div className="flex justify-center mt-3 mb-5">
          <div className="w-[90%] h-[0.05rem] bg-slate-50/10"></div>
        </div>
        <div
          className="flex items-center text-white hover:bg-[#1677FF] cursor-pointer duration-300 py-2 mx-1 rounded-lg"
          onClick={handleOutAdmin}
        >
          <BiLogOut size={24} className="ml-5" />
          <h1 className="pt-2 ml-2">Logout</h1>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex items-center justify-center drop-shadow-xl mb-8"
        >
          <h1 className="ml-4 font-bold text-xl mt-2 text-sky-900">
            Dashboard Admin
          </h1>
        </Header>
        <Content className="mx-10">
          {current === "1" && (
            <>
              <div className="lg:flex lg:gap-6">
                <div
                  style={{
                    background: colorBgContainer,
                  }}
                  className="p-10 lg:w-[50%] w-full rounded-xl mb-10 overflow-auto"
                >
                  <h1 className="mb-6 text-center font-semibold text-xl py-6">
                    Add Schedule
                  </h1>
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
                    <h1 className="text-md font-semibold">Destination</h1>
                    <div className="lg:flex gap-3">
                      <Form.Item
                        label="Departure"
                        name="from"
                        rules={[
                          {
                            required: true,
                            message: "Please input this !",
                          },
                        ]}
                      >
                        <Cascader
                          placeholder="From"
                          style={{
                            width: 230,
                          }}
                          size="large"
                          placement={"topLeft"}
                          options={option}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Arrival"
                        name="to"
                        rules={[
                          {
                            required: true,
                            message: "Please input this !",
                          },
                        ]}
                      >
                        <Cascader
                          placeholder="To"
                          style={{
                            width: 230,
                          }}
                          size="large"
                          placement={"topLeft"}
                          options={option}
                        />
                      </Form.Item>
                    </div>

                    <h1 className="text-md font-semibold">Price</h1>
                    <div className="flex gap-3">
                      <Form.Item
                        label="Input Price !"
                        name="price"
                        rules={[
                          {
                            required: true,
                            message: "Input Price !",
                          },
                        ]}
                      >
                        <InputNumber
                          prefix="Rp."
                          style={{
                            width: 230,
                          }}
                          size="large"
                        />
                      </Form.Item>
                    </div>

                    <h1 className="text-md font-semibold">Date</h1>
                    <div className="flex gap-3">
                      <Form.Item
                        label="Input Date !"
                        name="dateAt"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <DatePicker
                          style={{
                            width: 230,
                          }}
                          size="large"
                        />
                      </Form.Item>
                    </div>

                    <h1 className="text-md font-semibold">Schedule Time ID</h1>
                    <div className="flex gap-3">
                      <Form.Item
                        label="Input here !"
                        name="scheduleTimeId"
                        rules={[
                          {
                            required: true,
                            message: "Input ID here!",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{
                            width: 230,
                          }}
                        />
                      </Form.Item>
                    </div>

                    <h1 className="text-md font-semibold">Category Class ID</h1>
                    <div className="flex gap-3">
                      <Form.Item
                        label="Input here !"
                        name="categoryClassId"
                        rules={[
                          {
                            required: true,
                            message: "Input ID here!",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{
                            width: 230,
                          }}
                        />
                      </Form.Item>
                    </div>

                    <h1 className="text-md font-semibold">Plane ID</h1>
                    <div className="flex gap-3 mb-6">
                      <Form.Item
                        label="Input here !"
                        name="pesawatId"
                        rules={[
                          {
                            required: true,
                            message: "Input ID here!",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{
                            width: 230,
                          }}
                        />
                      </Form.Item>
                    </div>

                    <Form.Item>
                      <button
                        htmlType="submit"
                        className="lg:w-1/4 w-full px-4 h-12 lg:my-auto bg-gradient-to-l from-blue-600 to-blue-800 text-white font-semibold rounded-lg duration-500 hover:shadow-2xl"
                      >
                        Submit
                      </button>
                    </Form.Item>
                  </Form>
                </div>

                <div
                  style={{
                    background: colorBgContainer,
                  }}
                  className="p-2 lg:w-[50%] h-[850px] w-full rounded-xl mb-10 overflow-auto"
                >
                  <h1 className="text-base mb-3 pt-6 pl-3">
                    Information About Input ID :
                  </h1>

                  <div className="py-7">
                    <h2 className="pl-3"> - Planes & Airports</h2>
                    <Table
                      dataSource={dataSourcePlanes}
                      columns={columnsPlanes}
                    />
                  </div>

                  <div className="py-7">
                    <h2 className="pl-3"> - Categories</h2>
                    <Table
                      dataSource={dataSourceCategories}
                      columns={columnsCategories}
                    />
                  </div>

                  <div className="py-7">
                    <h2 className="pl-3"> - ScheduleTime</h2>
                    <Table
                      dataSource={dataSourceSchedule}
                      columns={columnsScheduleTimes}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <span>© 2022 Copyright:</span>
          <a
            class="text-gray-600 font-semibold"
            href="https://tailwind-elements.com/"
          >
            E-Flight Development
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminPage;
