import React from "react";
import { ImCross } from "react-icons/im";
import User from "../../images/user.png"

const MobileMenu = ({ menu, setMenu }) => {
    return (
      <div className={`menuBg ${menu ? "open" : "close"}`}>
        <div
          style={{
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              paddingTop: "2rem",
            }}
          >
            <ImCross
              size={30}
              color="white"
              style={{ marginBottom: "3rem" }}
              onClick={() => setMenu(false)}
            />
          </div>
  
          <div
            className="navbarTabs"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "80vh",
              width: "100%",
            }}
          >
            <div className="navbarTab">
              <p style={{ marginBottom: "5px" }}>HOME</p>
            </div>
            <div className="navbarTab">
              <p style={{ marginBottom: "5px" }}>SONGS</p>
            </div>
            <div className="navbarTab">
              <p style={{ marginBottom: "5px" }}>CONTACT</p>
            </div>
            <div className="navbarTab">
              <img alt="User Profile" src={User} style={{ width: "3rem" }} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;