import React from "react";
import { shallow } from "enzyme";
import repos from "../fixtures/repos";
import { ReposPage } from "../../components/ReposPage";

let getRepositories, wrapper;

beforeEach(() => {
  getRepositories = jest.fn();
  wrapper = shallow(<ReposPage getRepositories={getRepositories} />);
});

test("should render ReposPage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle getRepositories", () => {
  const params = {
    username: "JamesEdward",
  };
  wrapper.find("UserForm").prop("onSubmit")(params);
  expect(getRepositories).toHaveBeenLastCalledWith(params);
});
