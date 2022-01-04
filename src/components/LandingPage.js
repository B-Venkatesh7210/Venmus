import React from "react";
import Navbar from "./Navbar";
import Google from "../images/Google_black.png";
import Facebook from "../images/Facebook_black.png";
const HomePage = () => {
  return (
    <div className="mainBg">
      <Navbar />
      <div
        style={{
          height: "100vh",
          width: "100%",

          padding: "0 10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <span className="whiteText">Welcome To</span>
          <span className="yellowText">VENMUS</span>
          <span className="normalText">Login / Sign Up </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "start",
              width: "80%",
              marginTop: "2rem",
            }}
          >
            <div className="yellowButton">
              <img alt="Google Logo" src={Google} style={{maxHeight: "100%", maxWidth: "100%"}} />
            </div>
            <div className="yellowButton">
              <img alt="Google Logo" src={Facebook} style={{maxHeight: "100%", maxWidth: "100%"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function LandingPage() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default LandingPage;
