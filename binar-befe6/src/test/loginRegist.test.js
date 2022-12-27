import React from "react";
import { shallow } from "enzyme";
import LoginRegist from "./LoginRegist";

describe("LoginRegist component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginRegist />);
  });

  it("should render the component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render the form for registering", () => {
    wrapper.setState({ regist: true });
    expect(wrapper.find("Form").length).toEqual(1);
  });

  it("should render the form for logging in", () => {
    wrapper.setState({ regist: false });
    expect(wrapper.find("Form").length).toEqual(1);
  });
});
