import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Venmus from "./App";
import { UserProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Venmus />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
