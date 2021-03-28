import React from "react";
import { shallow } from "enzyme";
import { ReposList } from "../../components/ReposList";
import repos from "../fixtures/repos";

test("should render ReposList with repositories", () => {
  const data = {
    repositoryOwner: "JamesEdward",
    repositories: repos,
  };
  const wrapper = shallow(<ReposList repos={data} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ReposList with empty message", () => {
  const data = {
    repositoryOwner: null,
    repositories: [],
  };
  const wrapper = shallow(<ReposList repos={data} />);
  expect(wrapper).toMatchSnapshot();
});
