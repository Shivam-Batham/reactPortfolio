import React from "react";
import { Link } from "react-router-dom";
import x from "./x.png";
import linkedin from "./linkedin.png";
import github from "./git.png";
import gmail from "./gmail.png";
function GetInTouch() {
  const bgcolorDark = "bg-[#3d3a3a]"
  return (
  <div className={``}>
      <h2>Get in touch</h2>
      <hr />
      <div className={`flex justify-around pt-2 `}>
        <a href="mailto:shivambatham2610@gmail.com">
          <img src={gmail} className={`rounded-full p-2 w-20 h-20 ${bgcolorDark} `} />
        </a>
        <Link to="https://www.linkedin.com/in/shivam-batham/">
          <img src={github}className={`rounded-full p-2 w-20 h-20 ${bgcolorDark} `}/>
        </Link>
        <Link to="https://github.com/Shivam-Batham">
          <img src={linkedin} className={`rounded-full p-2 w-20 h-20 ${bgcolorDark} `} />
        </Link>

        <Link to="https://twitter.com/ShivamBathamm">
          <img src={x}className={`rounded-full p-2 w-20 h-20 ${bgcolorDark} `} />
        </Link>
      </div>
    </div>
  );
}

export default GetInTouch;
