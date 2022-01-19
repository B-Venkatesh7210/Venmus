import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Venmus from "./App";
import { UserProvider } from "./context";


ReactDOM.render(
  <React.StrictMode>
   
      <UserProvider>
        <Venmus />
      </UserProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
