import React from "react";
import { connect } from "react-redux";
import { getRepositoryIssues } from "../actions/issues";
import IssuesListItem from "./IssuesListItem";
import selectIssues from "../selectors/issues";

// export class IssuesList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentWillMount() {
//     this.props.getRepositoryIssues(this.props.params);
//   }
//   render() {
//     return (
//       <div className="content-container">
//         <h1 className="page-header__title">
//           Viewing Issues of Repository <span>{this.props.params.repoName}</span>{" "}
//         </h1>

//         <div className="list-header">
//           <div className="show-for-mobile">Issues</div>
//           <div className="show-for-desktop">Issue</div>
//           <div className="show-for-desktop">Created</div>
//         </div>
//         <div className="list-body">
//           {this.props.issues.length === 0 ? (
//             <div className="list-item list-item--message">
//               <span>No Issues for this Repo</span>
//             </div>
//           ) : (
//             this.props.issues.map(({ node }) => {
//               return <IssuesListItem key={node.id} {...node} />;
//             })
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   getRepositoryIssues: (params) => dispatch(getRepositoryIssues(params)),
// });

// const mapStateToProps = (state) => {
//   return {
//     issues: selectIssues(state.issues.repositoryissues, state.filters),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);

export const IssuesList = (props) => (
  <div className="content-container">
    <h1 className="page-header__title">
      Viewing Issues of Repository <span>{props.repoName}</span>{" "}
    </h1>

    <div className="list-header">
      <div className="show-for-mobile">Issues</div>
      <div className="show-for-desktop">Issue</div>
      <div className="show-for-desktop">Created</div>
    </div>
    <div className="list-body">
      {props.issues.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Issues for this Repo</span>
        </div>
      ) : (
        props.issues.map(({ node }) => {
          return <IssuesListItem key={node.id} {...node} />;
        })
      )}
    </div>
  </div>
);

export default IssuesList;
