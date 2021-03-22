import React from "react";
import { Link } from "react-router-dom";

const IssuesListItem = ({ id, title, author, createdAt }) => (
  <Link className="list-item" to={`/issueDetails/${id}`}>
    <div>
      <img src={author.avatarUrl} alt="Avatar" className="avatar" />
      <div className="list-item__sub-title">{title}</div>
    </div>
    <span className="list-item__sub-title ">opened at {createdAt}</span>
  </Link>
);

export default IssuesListItem;
