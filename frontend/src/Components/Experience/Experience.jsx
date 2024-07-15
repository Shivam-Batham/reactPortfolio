import React from "react";

function Experience() {
  const bgcolorDark = "bg-[#3d3a3a]"
  return (
    <div className="">
      <h2> My Experiences</h2>
      <hr />
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">Feb 2024</p>
            <p className="m-2">May 2024</p>
        </div>
        <div>
            <h2 className="text-lg">SDE Intern</h2>
            <p className="text-sm" >Trinity Infotech Solutions</p>
        </div>
      </div>
      <div className={`${bgcolorDark} w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">July 2024</p>
            <p className="m-2">Present</p>
        </div>
        <div>
            <h2 className="text-lg">Software Intern</h2>
            <p className="text-sm" >Valetx.in</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
