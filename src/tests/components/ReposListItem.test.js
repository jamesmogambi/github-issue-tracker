import React from "react";
import { shallow } from "enzyme";
import repos from "../fixtures/repos";
import ReposListItem from "../../components/ReposListItem";

test("should render ReposListItem correctly", () => {
  const data = {
    repositoryOwner: "JamesEdward",
    ...repos[0],
  };
  const wrapper = shallow(<ReposListItem {...data} />);
  expect(wrapper).toMatchSnapshot();
});
