import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  setRepositoryIssues,
  clearIssues,
  error,
  getRepositoryIssues,
} from "../../actions/issues";
import issues from "../fixtures/issues";

const createMockStore = configureMockStore([thunk]);

test("should setup set issues action object with data", () => {
  const payload = {
    repositoryissues: issues,
    username: "James Mogambi",
    repositoryname: "MERN ecommerce",
  };
  const action = setRepositoryIssues(payload);
  expect(action).toEqual({
    type: "SET_REPOSITORY_ISSUES",
    payload,
  });
});

test("should setup clear issues action object", () => {
  const action = clearIssues();
  expect(action).toEqual({
    type: "CLEAR_ISSUES",
  });
});

test("should setup error action object", () => {
  const payload = "Error fetching data";
  const action = error(payload);
  expect(action).toEqual({
    type: "ERROR",
    payload,
  });
});
