import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  setRepositories,
  clearRepositories,
  error,
  getRepositories,
} from "../../actions/repos";
import repos from "../fixtures/repos";

const createMockStore = configureMockStore([thunk]);
test("should setup set repos action object with data", () => {
  const payload = {
    repositories: repos,
    repositoryOwner: "James Mogambi",
  };
  const action = setRepositories(payload);
  expect(action).toEqual({
    type: "SET_REPOSITORIES",
    payload,
  });
});

test("should setup clear repositories action object", () => {
  const action = clearRepositories();
  expect(action).toEqual({
    type: "CLEAR_REPOSITORIES",
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
