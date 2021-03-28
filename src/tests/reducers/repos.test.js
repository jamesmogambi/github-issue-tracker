import reposReducer from "../../reducers/repos";
import repos from "../fixtures/repos";

test("should set default state", () => {
  const state = reposReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    repositories: [],
    repositoryOwner: null,
    error: null,
  });
});

test("should set user repositories", () => {
  const data = {
    repositories: repos,
    repositoryOwner: "James Edward",
  };
  const action = {
    payload: data,
    type: "SET_REPOSITORIES",
  };
  const state = reposReducer(
    { ...data, repositories: repos[0], error: null },
    action
  );
  expect(state).toEqual({ ...data, error: null });
});

test("should clear user repositories", () => {
  const action = {
    type: "CLEAR_REPOSITORIES",
  };
  const state = reposReducer(
    { repositoryOwner: "James Edwards", repositories: repos[0], error: null },
    action
  );
  expect(state).toEqual({
    repositories: [],
    repositoryOwner: null,
    error: null,
  });
});
