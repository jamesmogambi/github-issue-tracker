import React from "react";
import { shallow } from "enzyme";
import ReposPage from "../../components/ReposPage";

test("should render ReposPage correctly", () => {
  const wrapper = shallow(<ReposPage />);
  expect(wrapper).toMatchSnapshot();
});
