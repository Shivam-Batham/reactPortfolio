import React, { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";

const Footer = React.memo(function () {
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <footer
      className={darkmode ? "text-white" : "text-black"}
    >
      <div className={darkmode ? "text-white bg-black border m-4" : "text-black bg-white border-black"}></div>
      <p className="m-4 font-bold">Developed by Shivam Batham</p>
    </footer>
  );
});

export default Footer;
