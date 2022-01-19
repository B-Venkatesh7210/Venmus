import React from "react";
import { Route, Switch } from "react-router-dom";

import SongsPageDesktop from "./components/SongsPageDesktop";
import LandingPage from "./components/LandingPage";
import SongsPage from "./components/SongsPage";
import SongsPageMobile from "./components/mobileScreens/SongsPageMobile";

function Venmus() {
  return (
    <div>
    
      <LandingPage />
      {/* <SongsPage/> */}
      
    </div>
  );
}

export default Venmus;
