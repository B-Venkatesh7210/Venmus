import React, { useEffect, useState } from "react";
import dateFormat from "./utils/dateFormat";
import User from "../images/user.png";
import Moment from 'react-moment';

import { useMediaQuery } from "react-responsive";
import db from "../firebase_config";

const Comment = ({ comment }) => {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  const [user, setUser] = useState();

  

  useEffect(() => {
    const getUser = async () => {
      
      const userInfo = await db
        .collection("usersData")
        .doc(comment.userId)
        .get();
        
      setUser(userInfo.data());
    };
    getUser();
    
  }, []);
  return (
    <div
      style={{
        margin: "0.5rem 0rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <img
          alt="User Profile"
          src={user ? user.pic : User}
          style={{
            width: isMobile ? "2rem" : "3rem",
            borderRadius: "50%",
          }}
        />
        <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
        <div
          className="yellowText"
          style={{ fontSize: isMobile ? "12px" : "18px", margin: "0rem 2rem" }}
        >
          {user && user.name}
        </div>
        <div
          className="whiteText"
          style={{ fontSize: isMobile ? "18px" : "28px", margin: "0rem 2rem" }}
        >
          {comment.comment}
          
        </div>

        </div>
        
      </div>

      <div className="normalText" style={{ fontSize: "5px" }}>
        {/* {dateFormat(comment.time.toDate())} */}
        <Moment fromNow>
          {comment.time.toDate()}
        </Moment>

        {/* 24 Oct 2021 */}
      </div>
    </div>
  );
};

export default Comment;
