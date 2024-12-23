import React, { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";
import { Link } from "react-router-dom";
function GetInTouch() {
    const {darkmode,color} = useContext(DarkmodeContext)
  
  return (
  <div >
      <h2 className={`heading text-violet-500`}>Connect</h2>
      <hr />
      <p className="pt-4 mt-1 text-xs">
          Got a Project in mind?
        </p>
        <h1 className="pl-2 mt-4 text-6xl ">Let's Talk</h1>
      <div className={darkmode?`text-lg flex justify-around pt-5 flex-nowrap`: `text-lg flex justify-around pt-5 flex-nowrap`}>
        
        <a href="mailto:shivambatham2610@gmail.com">
        <i class='bx bxl-gmail exp text-2xl text-5xl mt-4 hover:scale-110'></i>        </a>
        <Link to="https://github.com/Shivam-Batham">
        <i class='bx bxl-github text-5xl mt-4 shadow'></i>        </Link>
        <Link to="https://www.linkedin.com/in/shivam-batham/">
        <i class='bx bxl-linkedin-square text-blue-500 text-5xl mt-4 shadow'></i>
        </Link>

        <Link to="https://twitter.com/ShivamBathamm">
        <i class='bx bxl-twitter text-blue-400 text-5xl mt-4 shadow rounded-full'></i>
        </Link>
      </div>
    </div>
  );
}

export default GetInTouch;
