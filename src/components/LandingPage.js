import React from "react";

import Google from "../images/Google_black.png";
import Facebook from "../images/Facebook_black.png";
import { useMediaQuery } from "react-responsive";
import Body from "./Body"


const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return (
    <div className="mainBg">
      
      <Body>
      <div
        style={{
          height: "100vh",
          width: "100%",

          padding: isMobile ? "20% 10%" : "0 10%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
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

            transform: isMobile && "scale(0.6)",
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
              <img
                alt="Google Logo"
                src={Google}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            <div className="yellowButton">
              <img
                alt="Google Logo"
                src={Facebook}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        
      </div>

      </Body>
      
    </div>
  );
};

const Guide = () => {
  

  return (
    <div className="mainBg" style={{ height: "400vh" }}>
      <div className="guideContent">
        {/* photos */}
        <div style={{ width: "40%", height: "60vh" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            width: "40%",
          }}
        >
          <p>
            <span className="whiteText">Who is</span>
            <span
              className="yellowText"
              style={{ fontSize: "70px", marginLeft: "1rem" }}
            >
              VENMUS
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="guideContent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            width: "40%",
          }}
        >
          <p>
            <span className="whiteText">Latest</span>
            <span
              className="yellowText"
              style={{ fontSize: "70px", marginLeft: "1rem" }}
            >
              Songs
            </span>
            <span className="whiteText" style={{ marginLeft: "1rem" }}>
              and
            </span>
            <br></br>
            <span className="yellowText" style={{ fontSize: "70px" }}>
              Snippets
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* photos */}
        <div style={{ width: "40%", height: "60vh" }}></div>
      </div>
      <div className="guideContent">
        {/* photos */}
        <div style={{ width: "40%", height: "60vh" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            width: "40%",
          }}
        >
          <p>
            <span className="yellowText" style={{ fontSize: "70px" }}>
              Bars
            </span>
            <span className="whiteText" style={{ marginLeft: "1rem" }}>
              and
            </span>
            <span
              className="yellowText"
              style={{ fontSize: "70px", marginLeft: "1rem" }}
            >
              Lyrics
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className="guideContent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            width: "40%",
          }}
        >
          <p>
            <span className="whiteText">Interact and</span>
            <br></br>
            <span className="yellowText" style={{ fontSize: "70px" }}>
              Collaborate
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* photos */}
        <div style={{ width: "40%", height: "60vh" }}></div>
      </div>
    </div>
  );
};

const GuideMobile = () => {
  return (
    <div className="mainBg" style={{ height: "400vh" }}>
      <div
        className="guideContent"
        style={{
          flexDirection: "column",
          marginTop: "0vh",
          height: "100vh",
          padding: "0rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            transform: "scale(0.6)",
          }}
        >
          <p>
            <span className="whiteText">Who is</span>
            <span
              className="yellowText"
              style={{ fontSize: "70px", marginLeft: "1rem" }}
            >
              VENMUS
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* photos */}
        <div style={{ width: "80%", height: "60vh" }}></div>
      </div>
      <div
        className="guideContent"
        style={{
          flexDirection: "column",
          marginTop: "0vh",
          height: "100vh",
          padding: "0rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            transform: "scale(0.6)",
          }}
        >
          <p style={{ textAlign: "center" }}>
            <span className="whiteText">Latest</span>
            <span
              className="yellowText"
              style={{ fontSize: "70px", marginLeft: "1rem" }}
            >
              Songs
            </span>
            <span className="whiteText" style={{ marginLeft: "1rem" }}>
              and
            </span>
            <br></br>
            <span className="yellowText" style={{ fontSize: "70px" }}>
              Snippets
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* photos */}
        <div style={{ width: "80%", height: "60vh" }}></div>
      </div>
      <div
        className="guideContent"
        style={{
          flexDirection: "column",
          marginTop: "0vh",
          height: "100vh",
          padding: "0rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            transform: "scale(0.6)",
          }}
        >
          <p>
            <span className="yellowText" style={{ fontSize: "70px" }}>
              Bars
            </span>
            <span className="whiteText" style={{ marginLeft: "1rem" }}>
              and
            </span>
            <span
              className="yellowText"
              style={{ fontSize: "70px", marginLeft: "1rem" }}
            >
              Lyrics
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* photos */}
        <div style={{ width: "80%", height: "60vh" }}></div>
      </div>
      <div
        className="guideContent"
        style={{
          flexDirection: "column",
          marginTop: "0vh",
          height: "100vh",
          padding: "0rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            transform: "scale(0.6)",
          }}
        >
          <p>
            <span className="whiteText">Interact and</span>
            <br></br>
            <span className="yellowText" style={{ fontSize: "70px" }}>
              Collaborate
            </span>
          </p>
          <p
            className="normalText"
            style={{ fontSize: "24px", marginTop: "2rem" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        {/* photos */}
        <div style={{ width: "80%", height: "60vh" }}></div>
      </div>
    </div>
  );
};

const DevInfo = () => {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return (
    <div
      className="mainBg"
      style={{
        height: isMobile ? "60vh" : "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: isMobile ? "100vh" : "80vh",
          width: isMobile ? "100%" : "60%",
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          // paddingTop: isMobile ? "3rem" : "8rem",
          transform: isMobile && "scale(0.6)",
        }}
      >
        <p className="whiteText">Developed By</p>
        <div className="dp" style={{ marginTop: "2rem" }}></div>
        <p
          className="normalText"
          style={{
            fontSize: "20px",
            padding: isMobile ? "0rem 0%" : "0rem 25%",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
    </div>
  );
};

function LandingPage() {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return (
    <div>
      <HomePage />
      {isMobile ? <GuideMobile /> : <Guide />}
      <DevInfo />
    </div>
  );
}

export default LandingPage;
