require("isomorphic-fetch");

// SET_REPOSITORY_ISSUES
export const setRepositoryIssues = (payload) => ({
  type: "SET_REPOSITORY_ISSUES",
  payload,
});
// CLEAR_ISSUES
export const clearIssues = () => ({
  type: "CLEAR_ISSUES",
});
// ERROR
export const error = (payload) => ({
  type: "ERROR",
  payload,
});

// Get Github Repo Issues
export const getRepositoryIssues = (params) => {
  return (dispatch) => {
    dispatch(clearIssues());
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },

      body: JSON.stringify({
        query: `
                  query($repoOwner: String!, $repoName: String!) {
                  repository(name: $repoName, owner: $repoOwner) {
                    issues(first: 100) {
                      edges {
                        node {
                           id
                           number
                           state
                           createdAt
                           title
                           url
                           author{
                            avatarUrl
                            login
                          }
                           bodyHTML
                        }
                      }
                    }
                  }
                }
                 `,
        variables: {
          repoOwner: params.repoOwner,
          repoName: params.repoName,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.repository) {
          dispatch(
            setRepositoryIssues({
              repositoryissues: res.data.repository.issues.edges,
              username: params.repoOwner,
              repositoryname: params.repoName,
            })
          );
        }
      })
      .catch((err) => {
        dispatch(error());
        console.error(err);
      });
  };
};
