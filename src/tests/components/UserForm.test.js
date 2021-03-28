import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import UserForm from "../../components/UserForm";
import repos from "../fixtures/repos";

test("should render UserForm correctly", () => {
  const wrapper = shallow(<UserForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should set username on input change", () => {
  const value = "James Edwards";
  const wrapper = shallow(<UserForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("username")).toBe(value);
});

test("should render for invalid form submission", () => {
  const wrapper = shallow(<UserForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("username").length).toEqual(0);
  expect(wrapper).toMatchSnapshot();
});

test("should call onSubmit prop for valid form submission", () => {
  const data = "James Edwards";
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<UserForm user={data} onSubmit={onSubmitSpy} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    username: data,
  });
});
