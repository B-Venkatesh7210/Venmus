import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import User from "../../images/user.png";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";

const MobileMenu = ({ menu, setMenu }) => {
  const [open, setOpen] = useState(false);

  const { Logout, user } = useGlobalContext();

  const handleOnClick = () => {
    const prevValue = open;
    setOpen(!prevValue);
  };

  const handleOnClick2 = () => {
    Logout();
    handleOnClick();
  };

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
          <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img
              alt="User Profile"
              src={user ? (user.photoURL ? user.photoURL : User) : User}
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
                <p
                  className="normalText"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                  onClick={handleOnClick2}
                >
                  Log Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
