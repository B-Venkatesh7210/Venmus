import React from "react";

import { useMediaQuery } from "react-responsive";

import Body from "./Body";
import SongsPageMobile from "./mobileScreens/SongsPageMobile";

import SongsPageDesktop from "./SongsPageDesktop";

function SongsPage() {

  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return (
    <div className="mainBg" style={{ overflow: "scroll" }}>
      <Body>
        {isMobile ? <SongsPageMobile/> : <SongsPageDesktop/>}
      </Body>
    </div>
  );
  
  
}

export default SongsPage;
