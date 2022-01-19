import React from "react";
import { useMediaQuery } from "react-responsive";

const Lyrics = () => {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return (
    <div
      style={{
        height: isMobile ? "40vh" : "80vh",
        width: isMobile ? "90%" : "50%",
        padding: isMobile ? "0rem" : "2rem",
        display: "flex",
        flexDirection: "column",
        
        justifyContent: isMobile && "start"
      }}
    >
      <p className="yellowText" style={{fontSize: isMobile && "60px"}}>Faisla</p>
      <div
        style={{
          height: "80%",
          width: "100%",
          background: "black",
          borderRadius: "15px",
          padding: "1rem",
          border: "2px solid white",
          overflow: "scroll",
        }}
      >
        <p
          className="whiteText"
          style={{ fontSize: "24px", width: "60%", lineHeight: "1.8" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default Lyrics;
