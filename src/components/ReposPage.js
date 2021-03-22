import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import UserForm from "./UserForm";
import ReposList from "./ReposList";
import { getRepositories } from "../actions/repos";

export class ReposPage extends React.Component {
  onSubmit = (params) => {
    this.props.getRepositories(params);
  };
  render() {
    return (
      <div>
        <div className="content-container">
          <UserForm onSubmit={this.onSubmit} />
          <ReposList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRepositories: (params) => dispatch(getRepositories(params)),
});

export default connect(undefined, mapDispatchToProps)(ReposPage);
