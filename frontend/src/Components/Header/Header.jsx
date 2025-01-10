import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { DarkmodeContext } from "../context/Darkmode";
import "./Header.css";

const Header = React.memo( function() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const navebarItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Skills",
      slug: "/skills",
      active: true,
    },
    {
      name: "Projects",
      slug: "/projects",
      active: true,
    },
    {
      name: "Hire Me",
      slug: "/contactme",
      active: true,
    },
  ];

  const {darkmode,ToggleDarkMode} = useContext(DarkmodeContext)
 
  return (
    <header 
    // className={"border border-black"}
    
     >
      <nav className=" grid grid-cols-12 mt-1 mb-3  pt-2 ">
        <div className="col-span-10  ">
          <ul className="head w-[100%]  m-auto flex flex-wrap flex-row justify-end  ">
            {navebarItems.map((item) => (
              <li className=" sm:ml-4 " key={item.name}>
                <button
                  className={darkmode?"hover:text-violet-300 p-2 font-medium text-xl border nav-btn " : " hover:text-violet-300 p-2 font-medium text-xl border-lg nav-btn"}
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-0 gap-0 pl-1 pt-2 ">
          {darkmode == true ? (
            <MoonIcon className=" sm:w-10 sm:h-8 w-10 h-6 bg-transparent text-white moon" onClick={()=>ToggleDarkMode()} />
          ) : (
            <SunIcon className=" sm:w-10 sm:h-8 w-10 h-6 bg-transparent text-yellow-200 sun" onClick={()=>ToggleDarkMode()}/>
          )}
        </div>
      </nav>
    </header>
  );
})

export default Header;
