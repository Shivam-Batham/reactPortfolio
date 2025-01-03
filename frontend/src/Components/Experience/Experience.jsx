import React, { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";

function Experience() {
  const bgcolorDark = "bg-[#3d3a3a]"
  const bgcolorLight = " bg-[#35bfff]"

  const {darkmode,color} = useContext(DarkmodeContext)
  return (
    <div className="">
      <h2 class="heading text-violet-500"> Experiences</h2>
      <hr />
      <div className={darkmode ? `dark-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2  border-red-200` :  ` light-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">July 2024</p>
            <p className="m-2">Present</p>
        </div>
        <div>
            <h2 className="text-lg font-medium">Software Developer Intern</h2>
            <p className="text-lg text-red-500" >Valetx.in</p>
        </div>
      </div>
      <div className={darkmode ? `dark-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2` :  ` light-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">Feb 2024</p>
            <p className="m-2">May 2024</p>
        </div>
        <div>
            <h2 className="text-lg">SDE Intern</h2>
            <p className="text-lg" >Trinity Infotech Solutions</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
