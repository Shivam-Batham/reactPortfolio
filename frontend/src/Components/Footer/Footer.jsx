import React, { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";

const Footer = React.memo(function () {
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <footer
      
    >
      {/* <div className={darkmode ? "text-white bg-black " : "text-black bg-white "}></div>
      <p className="m-2 font-bold">
        <span className="d">Developed </span>
        <span className="o">By </span>
        <span className="s">Shivam </span>
        <span className="b">Batham </span>
        </p> */}
    </footer>
  );
});

export default Footer;
