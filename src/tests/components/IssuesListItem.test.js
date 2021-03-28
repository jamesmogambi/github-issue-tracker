import React from "react";
import { shallow } from "enzyme";
import issues from "../fixtures/issues";
import IssuesListItem from "../../components/IssuesListItem";

test("should render IssuesListItem correctly", () => {
  const wrapper = shallow(<IssuesListItem {...issues[0].node} />);
  expect(wrapper).toMatchSnapshot();
});
