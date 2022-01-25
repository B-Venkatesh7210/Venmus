import React, { useEffect, useState } from "react";

import db from "../firebase_config";
import Comment from "./Comment";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      db.collection("songData")
        .doc(id)
        .collection("songComment")
        .orderBy("time", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    };
    getComments();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "20vh",
          background: "black",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          padding: "1rem 2rem",
          borderRadius: "15px",
          border: "2px solid white",
        }}
      >
        {comments.map((comment) => 
          <Comment comment={comment} key={comment.time} />
        )}
      </div>
    </>
  );
};

export default Comments;
