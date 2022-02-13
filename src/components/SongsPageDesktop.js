import React, { useState, useEffect } from "react";
import Song from "./Song";

import db from "../firebase_config";

const SongsPageDesktop = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      db.collection("songData").orderBy("songDate", "desc").onSnapshot((snapshot) =>
        setSongs(
          snapshot.docs.map((doc) => {
            return { data: doc.data(), id: doc.id };
          })
        )
      );
    };
    getSongs();
  }, []);

  return songs.map((song) => {
    return <Song song={song.data} id={song.id} />;
  });
};

export default SongsPageDesktop;
