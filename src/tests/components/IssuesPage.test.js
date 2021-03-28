import React from "react";
import { shallow } from "enzyme";
import issues from "../fixtures/issues";
import { IssuesPage } from "../../components/IssuesPage";

let getRepositoryIssues, wrapper, data, param;

beforeEach(() => {
  data = {
    issues: issues,
    repoName: "James Edward",
  };
  param = {
    params: { repoName: "springbootwebapp", repoOwner: "James Edward" },
  };
  getRepositoryIssues = jest.fn();
  wrapper = shallow(
    <IssuesPage
      getRepositoryIssues={getRepositoryIssues}
      issus={data.issues}
      repoName={data.repoName}
      match={param}
    />
  );
});

test("should render IssuesPage", () => {
  expect(getRepositoryIssues).toHaveBeenLastCalledWith(param.params);
  expect(wrapper).toMatchSnapshot();
});
