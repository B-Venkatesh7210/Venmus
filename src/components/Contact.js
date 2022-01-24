import React from "react";
import Body from "./Body";

const Contact = () => {
  return (
    <div className="mainBg" style={{ overflow: "scroll" }}>
      <Body>
        <div
          style={{
              height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
            <p className="navbarTabActive">This is Contact Page</p>
        </div>
        
      </Body>
    </div>
  );
};

export default Contact;
