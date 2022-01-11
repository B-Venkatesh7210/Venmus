import React from 'react'
import Faisla from "../images/Faisla.jpg";
import { BsDownload } from "react-icons/bs"

import AudioPlayer from "./AudioPlayer";

const Song = ()=> {
    return (
        <div className="yellowBgBlur">
            <img alt="thumbnail" src={Faisla} className="thumbnail" />
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
              <AudioPlayer />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="blackText" style={{fontSize: "14px"}}>Released On</p>
                <p className="blackText" style={{fontSize: "18px", marginTop: "5px"}}>17 Aug '21</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p className="blackText" style={{fontSize: "14px"}}>Instrumental</p>
                <BsDownload size={20} style={{margin: "5px 0 3px 0"}}/>
              </div>
            </div>
          </div>
    )
}

export default Song
