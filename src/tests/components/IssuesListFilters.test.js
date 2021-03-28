import React from "react";
import { shallow } from "enzyme";
import { IssuesListFilters } from "../../components/IssuesListFilters";

let setTextFilter, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  const data = { text: "" };
  wrapper = shallow(
    <IssuesListFilters setTextFilter={setTextFilter} filters={data} />
  );
});

test("should render IssuesListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render IssuesListFilters with data correctly", () => {
  wrapper.setProps({
    filters: { text: "automated tests" },
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "screenshots";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
