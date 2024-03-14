import React from "react";
// import "./Header.css";
import {  useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const navebarItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Projects",
      slug: "/projects",
      active: true
    },
    {
      name: "Hire Me",
      slug: "/contactme",
      active: true
    },
  ];

  return (
    <header className="border-b-2 text-white  border-sky-500 p-1">
      <nav className=" ">
        <ul className=" w-[80%] m-auto border-red-500 flex  flex-wrap flex-row ">
          {navebarItems.map((item) => (
            <li className=" sm:ml-4 " key={item}>
              <button  className="hover:text-sky-300 p-2 "  onClick={()=>navigate(item.slug)}>
                {item.name}
              </button>
            </li>
          ))}

        </ul>
      </nav>
        {/* <div>
          <button>Dark</button>
        </div> */}
    </header>
  );
}

export default Header;
