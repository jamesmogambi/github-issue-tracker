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
        loading: false,
      };
    case "CLEAR_REPOSITORIES":
      return {
        ...state,
        repositories: [],
      };

    default:
      return state;
  }
};
