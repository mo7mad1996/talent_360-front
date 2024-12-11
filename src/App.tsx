import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// components
import { ApolloProvider } from "@apollo/client";

import Router from "@/router";
import client from "@/utls/apolloClient";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router />
      </LocalizationProvider>
    </ApolloProvider>
  );
};

export default App;
