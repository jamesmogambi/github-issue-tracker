import React from "react";
import { shallow } from "enzyme";
import { IssuesList } from "../../components/IssuesList";
import issues from "../fixtures/issues";

test("should render IssuesList with issues", () => {
  const data = {
    issues: issues,
    repoName: "James Edwards",
  };
  const wrapper = shallow(
    <IssuesList issues={data.issues} repoName={data.repoName} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render IssuesList with empty message", () => {
  const data = {
    issues: [],
    repoName: null,
  };
  const wrapper = shallow(
    <IssuesList issues={data.issues} repoName={data.repoName} />
  );
  expect(wrapper).toMatchSnapshot();
});
