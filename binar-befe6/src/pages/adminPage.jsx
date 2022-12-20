import React, { useEffect, useState } from "react";
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
import { MdAirplanemodeActive } from "react-icons/md";
import axios from "axios";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [current, setCurrent] = useState("1");
  const [country, setCountry] = useState([]);
  const [categories, setCategories] = useState([]);
  const [scheduleTime, setScheduleTime] = useState([]);
  const [airports, setAirports] = useState([]);

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
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getCountry = async () => {
    try {
      const res = await axios.get(
        `https://febe6.up.railway.app/api/getCountry`
      );
      setCountry(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getScheduleTime = async () => {
    try {
      const res = await axios.get(
        `https://febe6.up.railway.app/api/getScheduleTime`
      );
      setScheduleTime(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(
        `https://febe6.up.railway.app/api/getCategories`
      );
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAirports = async () => {
    try {
      const res = await axios.get(
        `https://febe6.up.railway.app/api/airport/getAirports`
      );
      setAirports(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
    getScheduleTime();
    getCategories();
    getAirports();
  }, []);

  console.log("schedule", scheduleTime);
  console.log("categories", categories);
  console.log("airports", airports);

  const option = country.map((item) => ({
    value: `${item.countryName}`,
    label: `${item.countryName}`,
    children: item.city.map((data) => ({
      value: `${data.cityName}`,
      label: `${data.cityName}`,
    })),
    isLeaf: false,
  }));

  const dataSource = airports.map((item) => ({
    key: `${item.id}`,
    id: `${item.id}`,
    airport: `${item.airportName}`,
    city: `${item.cityName}`,
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
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
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="flex items-center mt-6 mx-8">
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
          <Menu.Item key="2" icon={<MdAirplanemodeActive />}>
            Airports
          </Menu.Item>
        </Menu>
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
                          // onChange={handleChangeDeparture}
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
                          // onChange={handleChangeArrival}
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
                            message: "Input Price !",
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
                            message: "Input Price !",
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

                    <h1 className="text-md font-semibold">Airport ID</h1>
                    <div className="flex gap-3 mb-6">
                      <Form.Item
                        label="Input here !"
                        name="pesawatId"
                        rules={[
                          {
                            required: true,
                            message: "Input Price !",
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
                  className="p-5 lg:w-[50%] h-[850px] w-full rounded-xl mb-10 overflow-auto"
                >
                  <h1 className="text-base mb-3 pt-6 text-center">
                    Information About Input ID :
                  </h1>

                  <div className="py-7">
                    <h2> - Airports</h2>
                    <Table dataSource={dataSource} columns={columns} />
                  </div>

                  {/* <div className="py-7">
                    <h2> - Airports</h2>
                    <Table dataSource={dataSource} columns={columns} />
                  </div> */}
                </div>
              </div>
            </>
          )}
          {current === "2" && (
            <>
              <div>hai</div>
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
export default App;
