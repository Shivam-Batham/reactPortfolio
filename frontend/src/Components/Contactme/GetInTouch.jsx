import React from "react";
import { Link } from "react-router-dom";
import x from "./x.png";
import linkedin from "./linkedin.png";
import github from "./git.png";
import gmail from "./gmail.png";
function GetInTouch() {
  return (
    <div className="">
      <h2>Get in touch</h2>
      <hr />
      <div className="flex justify-around p-2">
        <a href="mailto:shivambatham2610@gmail.com">
          <img src={gmail} className="w-20 h-20  " />
        </a>
        <Link to="https://www.linkedin.com/in/shivam-batham/">
          <img src={github} className="w-20 h-20  " />
        </Link>
        <Link to="https://github.com/Shivam-Batham">
          <img src={linkedin} className="w-20 h-20 " />
        </Link>

        <Link to="https://twitter.com/ShivamBathamm">
          <img src={x} className="w-20 h-20 " />
        </Link>
      </div>
    </div>
  );
}

export default GetInTouch;
