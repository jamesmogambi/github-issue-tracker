import React from "react";
import { connect } from "react-redux";
import { getRepositoryIssues } from "../actions/issues";
import IssuesList from "./IssuesList";
import IssuesListFilters from "./IssuesListFilters";
import selectIssues from "../selectors/issues";

export class IssuesPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getRepositoryIssues(this.props.match.params);
  }
  render() {
    return (
      <div>
        <IssuesListFilters />
        <IssuesList issues={this.props.issues} repoName={this.props.repoName} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRepositoryIssues: (params) => dispatch(getRepositoryIssues(params)),
});

const mapStateToProps = (state) => {
  return {
    issues: selectIssues(state.issues.repositoryissues, state.filters),
    repoName: state.issues.repositoryname,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage);
