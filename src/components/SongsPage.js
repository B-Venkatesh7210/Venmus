import React from "react";
import AddComment from "./AddComment";
import Lyrics from "./Lyrics";

import Song from "./Song";
import Body from "./Body";

function SongsPage() {
  return (
    <div className="mainBg" style={{ overflow: "scroll" }}>
      <Body>
        <div
          style={{
            height: "120vh",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",

              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Song />
            <Lyrics />
          </div>
          <AddComment />
        </div>
      </Body>
    </div>
  );
}

export default SongsPage;
