import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { onError } from "apollo-link-error";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: "https://api.github.com/graphql",
// });
// let TOKEN = "f225bd179c235c9ea0678943dbe7701952ea94bc";
// const authLink = setContext((_, { headers }) => {
// get the authentication token from local storage if it exists
// const token = localStorage.getItem("token");
// return the headers to the context so httpLink can read them
//   console.log("token", `${TOKEN}`);
//   return {
//     headers: {
//       ...headers,
//       // authorization: `Bearer ${TOKEN}`,
//       authorization: TOKEN ? `Bearer ${TOKEN}` : "",
//     },
//   };
// });
// const client = new ApolloClient({
//   cache,
//   link: authLink.concat(link),
// link,
// });
// const GITHUB_BASE_URL = "https://api.github.com/graphql";
// const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN =
//   "f225bd179c235c9ea0678943dbe7701952ea94bc";
// const cache = new InMemoryCache();

// const httpLink = new HttpLink({
//   uri: GITHUB_BASE_URL,
//   headers: {
//     authorization: `bearer ${
//       REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
//       // process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
//     }`,
//   },
// });

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   }

//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`);
//   }
// });

// const link = ApolloLink.from([errorLink, httpLink]);

// const client = new ApolloClient({
//   link,
//   cache,
// });
const store = configureStore();
const jsx = (
  <Provider store={store}>
    {/* <ApolloProvider client={client}> */}
    <AppRouter />
    {/* </ApolloProvider> */}
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
