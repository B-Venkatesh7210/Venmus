import React from "react";

const Error = () => {
  return (
    <div
      className="mainBg"
      style={{
          height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
        <p className="whiteText">
        OOps! Page not found.
        </p>
    </div>
  );
};

export default Error;
