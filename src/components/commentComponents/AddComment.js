import React from "react";
import User from "../../images/user.png";
import { useMediaQuery } from "react-responsive";

import InputBase from "@mui/material/InputBase";
import { AiOutlineDown } from "react-icons/ai";

const AddComment = () => {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return (
    <div
      style={{
        height: isMobile ? "20vh" : "30vh",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: isMobile ? "1rem 1rem" : "1rem 2rem",
      }}
    >
      <p className="whiteText" style={{ fontSize: "25px" }}>
        Add a comment
      </p>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          alt="User Profile"
          src={User}
          style={{ width: isMobile ? "2rem" : "3rem" }}
        />

        <InputBase
          variant="standard"
          multiline
          style={{
            borderBottom: "2px solid white",
            width: "80%",
            margin: "0rem 1rem",
            color: "white",
          }}
        />
        <div
          className="yellowButton"
          style={{
            width: "15%",
            fontSize: isMobile ? "16px" : "24px",
            alignItems: "center",
            height: isMobile && "30px",
            borderRadius: isMobile && "10px",
          }}
        >
          Add
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p
          className="normalText"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          View more comments
        </p>
        <AiOutlineDown
          size={20}
          color="white"
          style={{ margin: "0rem 0.5rem" }}
        />
      </div>
    </div>
  );
};

export default AddComment;
