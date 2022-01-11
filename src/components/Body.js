import React, { useState } from "react";
import Navbar from "./Navbar";

const Body = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Navbar menu={menu} setMenu={setMenu} />
      {!menu && <div style={{ marginTop: "10vh" }}>{children}</div>}
    </>
  );
};

export default Body;
