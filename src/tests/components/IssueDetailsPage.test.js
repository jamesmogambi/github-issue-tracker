import React from "react";
import { shallow } from "enzyme";
import issues from "../fixtures/issues";
import { IssueDetailsPage } from "../../components/IssueDetailsPage";

test("should render IssueDetailsPage correctly", () => {
  const wrapper = shallow(<IssueDetailsPage issue={issues[0]} />);
  expect(wrapper).toMatchSnapshot();
});
