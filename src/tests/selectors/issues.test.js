import selectIssues from "../../selectors/issues";
import issues from "../fixtures/issues";

test("should filter by text value", () => {
  const filters = {
    text: "screenshots",
  };
  const result = selectIssues(issues, filters);
  expect(result).toEqual([issues[0]]);
});
