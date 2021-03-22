// Issues Reducer

const initialState = {
  username: null,
  repositoryname: null,
  repositoryissues: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPOSITORY_ISSUES":
      const { username, repositoryname, repositoryissues } = action.payload;
      return {
        ...state,
        username,
        repositoryname,
        repositoryissues,
        loading: false,
      };

    case "CLEAR_ISSUES":
      return {
        ...state,
        username: null,
        repositoryname: null,
        repositoryissues: [],
        loading: action.payload,
      };
    default:
      return state;
  }
};
