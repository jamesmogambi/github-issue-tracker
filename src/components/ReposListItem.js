import React from "react";
import { Link } from "react-router-dom";

const ReposListItem = ({ id, name, description, repositoryOwner }) => (
  <div className="list-item">
    <div>
      <h3 className=" list-item__title">{name}</h3>
      <span className=" list-item__sub-title">{description}</span>
      <Link to={`/issues/${name}/${repositoryOwner}`}>
        <h3 className="list-item__sub-title list-link ">View Issues</h3>
      </Link>
    </div>
  </div>
);

export default ReposListItem;
