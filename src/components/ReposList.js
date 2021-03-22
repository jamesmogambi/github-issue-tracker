import React from "react";
import { connect } from "react-redux";
import ReposListItem from "./ReposListItem";

export const ReposList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Repositories</div>
      <div className="show-for-desktop">Repository</div>
      <div className="show-for-desktop">Action</div>
    </div>
    <div className="list-body">
      {props.repos.repositories.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Repos</span>
        </div>
      ) : (
        props.repos.repositories.map((repo) => {
          return (
            <ReposListItem
              key={repo.id}
              repositoryOwner={props.repos.repositoryOwner}
              {...repo}
            />
          );
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
  };
};

export default connect(mapStateToProps)(ReposList);
