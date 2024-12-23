import React, { useContext } from "react";
import { DarkmodeContext } from "../context/Darkmode";

function Contactme() {
  const {darkmode,color} = useContext(DarkmodeContext)
  return (
    <div className={darkmode?"dark-theme   p-4  sm:w-[70%] w-[95%] rounded-md mx-auto m-2 grid sm:grid-cols-2 ": "light-theme   p-4  sm:w-[70%] w-[95%] rounded-md mx-auto m-2 grid sm:grid-cols-2 "}>
      <div className="sm:grid-span-2 p-1">
        <h1 className="heading text-violet-600 text-2xl font-semibold text-transparent bg-clip-text ">
          Hire me
        </h1>
        <p>I'm a Software Developer with a strong ambition to create meaningful and positive impacts in people's lives.
        <br />
        <br />
        With over 6 months of experience as a developer, I'm dedicated to exploring the new tech to enhance experience in JavaScript, TypeScript, React, Next, Node, MongoDB.
        <br />
        <br />
        
</p>
      </div>
      
      <form action={``} className="p-1 sm:grid-span-2" method="POST">
        <lable htmlFor="fullname">Full name</lable>
        <input
          id="name"
          type="text"
          className={`hover:cursor-pointer block sm:w-[100%] w-[100%] bg-transparent border-b-2 border-blue-500  outline-none`}
        />

        <lable htmlFor="email" className="block">
          Your email
        </lable>
        <input
          id="email"
          name="email"
          type="email"
          className={`hover:cursor-pointer w-[100%] border-red-500 bg-[#333145] block sm:w-[100%]    bg-transparent border-b-2 outline-none`}
        />
        <lable htmlFor="phone" className="block">
          Your phone
        </lable>
        <input
          id="phone"
          name="phone"
          type="text"
          className={`hover:cursor-pointer w-[100%] border-yellow-500 block sm:w-[100%]    bg-transparent border-b-2 outline-none`}
        />

        <lable className={`block `} htmlFor="message">
          Your short message
        </lable>
        <textarea
          id="message"
          maxLength={500}
          className={darkmode? "dark-theme sm:w-[100%] w-[100%] h-[150px]   border-b-2 border-green-500 outline-none" : "light-theme sm:w-[100%] w-[100%] h-[150px]   border-b-2 border-green-500 outline-none"}
        />
        <button className={`btn block border rounded-md p-2 text-l`} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactme;
