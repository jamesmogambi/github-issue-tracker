import issuesReducer from "../../reducers/issues";
import issues from "../fixtures/issues";

test("should set default state", () => {
  const state = issuesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    username: null,
    repositoryname: null,
    repositoryissues: [],
    error: null,
  });
});

test("should set repo issues", () => {
  const data = {
    username: "James Edwards",
    repositoryname: "ecommerce",
    repositoryissues: issues,
  };
  const action = {
    payload: data,
    type: "SET_REPOSITORY_ISSUES",
  };
  const state = issuesReducer(
    { ...data, repositoryissues: issues[0], error: null },
    action
  );
  expect(state).toEqual({ ...data, error: null });
});

test("should clear repo issues", () => {
  const action = {
    type: "CLEAR_ISSUES",
  };
  const state = issuesReducer(
    {
      username: "Carl Davis",
      repositoryname: "ecommerce",
      repositoryissues: issues[0],
      error: null,
    },
    action
  );
  expect(state).toEqual({
    username: null,
    repositoryname: null,
    repositoryissues: [],
    error: null,
  });
});
