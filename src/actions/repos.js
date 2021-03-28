require("isomorphic-fetch");

// SET_REPOSITORIES
export const setRepositories = (payload) => ({
  type: "SET_REPOSITORIES",
  payload,
});
// CLEAR_REPOSITORIES
export const clearRepositories = () => ({
  type: "CLEAR_REPOSITORIES",
});

// ERROR
export const error = (payload) => ({
  type: "ERROR",
  payload,
});

// Get Github Repositories
export const getRepositories = (params) => {
  return (dispatch) => {
    dispatch(clearRepositories());
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
               query($github_login: String!) {
    user(login: $github_login) {
      name
      repositories(first: 100) { 
        nodes {
             id
        name
        description 
        url 
        updatedAt
        forkCount
        }
      }
    }
  }
                 `,
        variables: {
          github_login: params.username,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.user) {
          let repos = res.data.user.repositories.nodes;
          let owner = res.data.user.name;
          dispatch(
            setRepositories({
              repositories: repos,
              repositoryOwner: params.username,
            })
          );
        }
      })
      .catch((err) => {
        dispatch(error(err));
        console.error(err);
      });
  };
};
