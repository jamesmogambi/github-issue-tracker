import React from "react";
import IssuesList from "./IssuesList";
import IssuesListFilters from "./IssuesListFilters";

const IssuesPage = (props) => (
  <div>
    <IssuesListFilters />
    <IssuesList params={props.match.params} />
  </div>
);

export default IssuesPage;
