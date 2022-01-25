import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import User from "../images/user.png";
import AudioPlayer from "./songComponents/AudioPlayer";
import { useMediaQuery } from "react-responsive";
import dateFormat from "./utils/dateFormat";
import { useGlobalContext } from "../context";
import db from "../firebase_config"
import Comments from "./Comments";
import ReactMarkdown from 'react-markdown'

const Song = ({song, id}) => {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  const { user } = useGlobalContext();

  const [comment, setComment] = useState("");
  
  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div
      style={{
        height: "150vh",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          marginTop: "5rem",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Song Yellow Box */}

        <div
          className="yellowBgBlur"
          style={{ transform: isMobile && "scale(0.6)" }}
        >
          <img alt="thumbnail" src={song.songPic} className="thumbnail" />
          <div
            style={{ height: "3px", width: "100%", background: "#757630" }}
          ></div>
          <div
            style={{
              height: "20%",
              width: "100%",
              padding: "1rem 0rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <AudioPlayer songAudio={song.songAudio} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="blackText" style={{ fontSize: "14px" }}>
                Released On
              </p>
              <p
                className="blackText"
                style={{ fontSize: "18px", marginTop: "5px" }}
              >
                {dateFormat(song.songDate.toDate())}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p className="blackText" style={{ fontSize: "14px" }}>
                Instrumental
              </p>
              <BsDownload size={20} style={{ margin: "5px 0 3px 0" }} />
            </div>
          </div>
        </div>

        {/* Song Yellow Box */}

        {/* Song Lyrics */}

        <div
          style={{
            height: isMobile ? "40vh" : "80vh",
            width: isMobile ? "90%" : "50%",
            padding: isMobile ? "0rem" : "2rem",
            display: "flex",
            flexDirection: "column",

            justifyContent: isMobile && "start",
          }}
        >
          <p
            className="yellowText"
            style={{ fontSize: isMobile ? "60px" : "80px" }}
          >
            {song.songName}
          </p>
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
            <ReactMarkdown
              className="whiteText2"
              
              // children={song.songLyrics}
              
            >
            
              {song.songLyrics}
            </ReactMarkdown>
          </div>
        </div>

        {/* Song Lyrics */}
      </div>

      {/* Song Comments */}

      <div
        style={{
          height: isMobile ? "20vh" : "50vh",
          width: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: isMobile ? "1rem 1rem" : "1rem 2rem",
        }}
      >
        <p className="whiteText" style={{ fontSize: "30px" }}>
          Add a comment
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            alt="User Profile"
            src={user ? user.photoURL ? user.photoURL : User : User}
            style={{ width: isMobile ? "2rem" : "4rem" , borderRadius: "50%"}}
          />

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (comment.trim().length === 0) {
                alert("Invalid Comment");
              } else {
                await db
                  .collection("songData")
                  .doc(id)
                  .collection("songComment")
                  .add({
                    comment: comment,
                    userId: user.uid,
                    time: new Date(),
                    
                  });
                alert("Comment added");
                setComment("");
              }
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              onChange={handleOnChange}
              value={comment}
              style={{
                width: "80%",
                margin: "0rem 2rem",
                color: "white",
                background: "transparent",
                height: "20px",
                border: "none",
                outline: "none",
                borderBottom: "2px solid white",
              }}
            ></input>
            <button
              type="submit"
              className="yellowButton"
              style={{
                border: "none",
                outline: "none",
                appearance: "none",
                width: "10%",
                fontSize: isMobile ? "16px" : "24px",
                alignItems: "center",
                height: isMobile && "30px",
                borderRadius: isMobile && "10px",
              }}
            >
              Add
            </button>
          </form>
        </div>
        <Comments id={id} style={{overflow: "scroll"}}/>
      
        
      </div>

      {/* Song Comments */}
    </div>
  );
};

export default Song;
