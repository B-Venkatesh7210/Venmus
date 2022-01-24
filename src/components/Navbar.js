import React, { useState } from "react";
import VenmusYellow from "../logos/Venmus Logo Yellow.png";
import User from "../images/user.png";
import MobileMenu from "./mobileScreens/MobileMenu";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { border } from "@mui/system";
import { useGlobalContext } from "../context";

function Navbar({ menu, setMenu }) {
  const isMobile = useMediaQuery({ maxWidth: "1200px" });
  const [open, setOpen] = useState(false);

  const { Logout, user } = useGlobalContext();

  const handleOnClick = () => {
    const prevValue = open;
    setOpen(!prevValue);
  };

  const handleOnClick2 = () => {
    Logout();
    handleOnClick();

  }

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
            <NavLink
              className={(navData) =>
                navData.isActive ? "navbarTabActive" : ""
              }
              to="/"
              style={{
                marginBottom: "5px",
                textDecoration: "none",
                color: "white",
              }}
            >
              HOME
            </NavLink>
          </div>
          <div className="navbarTab">
            <NavLink
              className={(navData) =>
                navData.isActive ? "navbarTabActive" : ""
              }
              to="/songs"
              style={{
                marginBottom: "5px",
                textDecoration: "none",
                color: "white",
              }}
            >
              SONGS
            </NavLink>
          </div>
          <div className="navbarTab">
            <NavLink
              className={(navData) =>
                navData.isActive ? "navbarTabActive" : ""
              }
              to="/contact"
              style={{
                marginBottom: "5px",
                textDecoration: "none",
                color: "white",
              }}
            >
              CONTACT
            </NavLink>
          </div>

          <div style={{cursor: "pointer"}}>

            <img
              alt="User Profile"
              src={user ? user.photoURL ? user.photoURL : User : User}
              style={{ width: "3rem", borderRadius: "50%" }}
              onClick={user && handleOnClick}
            />

            {open && (
              <div
                className="dropdown"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className="normalText" style={{ fontSize: "14px", cursor: "pointer"}} onClick={handleOnClick2}>
                  Log Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
