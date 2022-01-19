import React from "react";
import VenmusYellow from "../logos/Venmus Logo Yellow.png";
import User from "../images/user.png";
import MobileMenu from "./mobileScreens/MobileMenu";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ menu, setMenu }) {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  return isMobile ? (
    <>
      <MobileMenu setMenu={setMenu} menu={menu} />
      <div className="navbar" style={{ height: "8vh" }}>
        <div
          style={{
            display: "flex",

            flexDirection: "row",
            padding: "0.5rem 1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img alt="Venmus Logo" src={VenmusYellow} style={{ width: "3rem" }} />

          <GiHamburgerMenu
            size={40}
            style={{ color: "white" }}
            onClick={() => setMenu(!menu)}
          ></GiHamburgerMenu>
        </div>
      </div>
    </>
  ) : (
    <div className="navbar" style={{ height: "15vh" }}>
      <div
        style={{
          display: "flex",

          flexDirection: "row",
          padding: "0.5rem 2rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img alt="Venmus Logo" src={VenmusYellow} style={{ width: "4.5rem" }} />

        <div className="navbarTabs">
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
}

export default Navbar;
