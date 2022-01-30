import React from "react";
import Body from "./Body";
import FacebookLogo from "../logos/Facebook_black.png";
import InstagramLogo from "../logos/Instagram_black.png";
import emailjs from "@emailjs/browser";
import YoutubeLogo from "../logos/Youtube_black.png";
import LinkedinLogo from "../logos/LinkedIN_black.png";
import DiscordLogo from "../logos/Discord_black.png";
import { useMediaQuery } from "react-responsive";

const Contact = () => {

  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "venmus_template",
        e.target,
        "user_LADVfxcg2oKv53I1qa6lj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.alert("Email has been sent successfully")

    e.target.reset();
  }

  return (
    <div className="mainBg" style={{ overflow: "scroll" }}>
      <Body>
        <div
          style={{
            height: isMobile ? "150vh" : "100vh",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "start",
              height: "80vh",

              width: isMobile ? "80%" : "40%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="yellowText" style={{ fontSize: isMobile ? "40px" : "60px" }}>
                Send me a mail
              </p>
              <p className="normalText" style={{fontSize: isMobile && "16px"}}>Ask questions, connect and collab.</p>
            </div>
            <form
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                width: "100%",
                height: "60vh",
              }}
            >
              <input
                type="text"
                className="formControl"
                placeholder="Name"
                name="name"
              ></input>
              <input
                type="text"
                className="formControl"
                placeholder="Your email"
                name="email"
              ></input>
              <input
                type="text"
                className="formControl"
                placeholder="Subject"
                name="subject"
              ></input>
              <textarea
                type="text"
                className="formControl"
                placeholder="Your Message"
                name="message"
                style={{ height: "20vh" }}
              ></textarea>
              <input
                type="submit"
                className="yellowButton"
                value="Send message"
                style={{
                  fontSize: isMobile ? "12px" : "24px",
                  height: isMobile && "2rem",
                  border: "none",
                  outline: "none",
                  marginTop: "1rem",
                }}
              ></input>
            </form>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              alignItems: "start",
              height: isMobile ? "60vh" : "80vh",
              paddingTop: "1rem",

              width: isMobile ? "80%" : "40%",
            }}
          >
            <p className="yellowText" style={{ fontSize: isMobile ? "40px" : "60px" }}>
              Social Handles
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "start",
                height: "60vh",
              }}
            >
              <a
                href="https://www.facebook.com/boddu.venkatesh.39/"
                target="_blank"
                rel="noreferrer"
                className="socialHandle"
              >
                <img
                  alt="Facebook"
                  src={FacebookLogo}
                  style={{ height: "50px" }}
                ></img>
                <p
                  className="whiteText"
                  style={{
                    fontSize: "30px",
                    marginTop: "5px",
                    marginLeft: "1rem",
                  }}
                >
                  Facebook
                </p>
              </a>
              <a
                href="https://www.instagram.com/_venmus_/"
                target="_blank"
                rel="noreferrer"
                className="socialHandle"
              >
                <img
                  alt="Instagram"
                  src={InstagramLogo}
                  style={{ height: "50px" }}
                ></img>
                <p
                  className="whiteText"
                  style={{
                    fontSize: "30px",
                    marginTop: "5px",
                    marginLeft: "1rem",
                  }}
                >
                  Instagran
                </p>
              </a>
              <a
                href="https://www.youtube.com/channel/UC8gQROdn6l9mzX9Xx9yDQpg"
                target="_blank"
                rel="noreferrer"
                className="socialHandle"
              >
                <img
                  alt="Youtube"
                  src={YoutubeLogo}
                  style={{ height: "50px" }}
                ></img>
                <p
                  className="whiteText"
                  style={{
                    fontSize: "30px",
                    marginTop: "5px",
                    marginLeft: "1rem",
                  }}
                >
                  Youtube
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/venkatesh-venmus-b0b839121/"
                target="_blank"
                rel="noreferrer"
                className="socialHandle"
              >
                <img
                  alt="LinkedIn"
                  src={LinkedinLogo}
                  style={{ height: "50px" }}
                ></img>
                <p
                  className="whiteText"
                  style={{
                    fontSize: "30px",
                    marginTop: "5px",
                    marginLeft: "1rem",
                  }}
                >
                  LinkedIn
                </p>
              </a>
              <a
                href="https://discordapp.com/channels/@me/_VENMUS#2026/"
                target="_blank"
                rel="noreferrer"
                className="socialHandle"
              >
                <img
                  alt="Discord"
                  src={DiscordLogo}
                  style={{ height: "50px" }}
                ></img>
                <p
                  className="whiteText"
                  style={{
                    fontSize: "30px",
                    marginTop: "5px",
                    marginLeft: "1rem",
                  }}
                >
                  Discord
                </p>
              </a>
            </div>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Contact;
