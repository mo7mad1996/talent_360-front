import ReactDOM from "react-dom/client";
// import { ApolloProvider } from "@apollo/client";
// import client from "./apolloClient";
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <ApolloProvider client={client}>
  <App />
  // </ApolloProvider>
);
