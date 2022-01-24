import React from "react";
import { Route, Routes } from "react-router-dom";

import SongsPageDesktop from "./components/SongsPageDesktop";
import LandingPage from "./components/LandingPage";
import SongsPage from "./components/SongsPage";
import Error from "./components/Error";
import SongsPageMobile from "./components/mobileScreens/SongsPageMobile";
import Contact from "./components/Contact";

function Venmus() {
  return (
    <div>
      {/* <Error/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/songs" element={<SongsPage />}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default Venmus;
