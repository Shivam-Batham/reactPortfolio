import React, { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";

function Education() {

   const {darkmode,ToggleDarkMode} = useContext(DarkmodeContext)
  return (
    <div className=''>
      <h2 className="heading text-violet-500"> Education </h2>
      <hr />
      <div className={darkmode? `dark-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`: `light-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2 ">July 2024</p>
            <p className="m-2">Oct 2021</p>
        </div>
        <div>
            <h2 className="text-lg"> Bachelor of Technology </h2>
            <p className="text-sm" >Maharana Pratap Engineering College, Kanpur</p>
        </div>
      </div>
      <div className={darkmode?`dark-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`: `light-theme w-[96%] my-2 rounded-md  mx-auto flex p-2 gap-2`}>
        <div className="text-xs">
            <p className="m-2">May 2021</p>
            <p className="m-2">July 2018</p>
        </div>
        <div>
            <h2 className="text-lg">Diploma in Computer Science</h2>
            <p className="text-sm" >Govt. Polytechnic, Unnao</p>
        </div>
      </div>
    </div>
  )
}

export default Education
