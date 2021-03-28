import React from "react";
import { connect } from "react-redux";

export const IssueDetailsPage = (props) => (
  <div>
    <div className="content-container">
      {props.issue ? (
        <div>
          <h1 className="page-header__title">
            Viewing details of Issue <span>{props.issue.node.title}</span>{" "}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: props.issue.node.bodyHTML }}
          ></div>
        </div>
      ) : (
        <div className="list-item list-item--message">
          <span>No Details </span>
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    issue: state.issues.repositoryissues.find(
      (issue) => issue.node.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(IssueDetailsPage);
