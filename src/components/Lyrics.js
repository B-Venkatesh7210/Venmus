import React from "react";

const Lyrics = () => {
  return (
    <div
      style={{
        height: "80vh",
        width: "50%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p className="yellowText">Faisla</p>
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
        <p className="whiteText" style={{fontSize: "24px", width: "60%", lineHeight: "1.8"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default Lyrics;
