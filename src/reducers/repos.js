// Repositories Reducer
const initialState = {
  repositories: [],
  repositoryOwner: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPOSITORIES":
      const { repositories, repositoryOwner } = action.payload;
      return {
        ...state,
        repositoryOwner,
        repositories,
      };
    case "CLEAR_REPOSITORIES":
      return {
        repositories: [],
        repositoryOwner: null,
        error: null,
      };

    default:
      return state;
  }
};
