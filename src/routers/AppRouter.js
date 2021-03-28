import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ReposPage from "../components/ReposPage";
import IssuesPage from "../components/IssuesPage";
import IssueDetailsPage from "../components/IssueDetailsPage";
import NotFoundPage from "../components/NotFoundPage";
import PublicRoute from "./PublicRoute";
export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={ReposPage} exact={true} />
        <PublicRoute
          path="/issues/:repoName/:repoOwner"
          component={IssuesPage}
        />
        <PublicRoute path="/issueDetails/:id" component={IssueDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
