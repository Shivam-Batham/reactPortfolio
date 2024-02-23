import React from "react";
import "./Header.css";
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
      name: "ContactMe",
      slug: "/contactme",
      active: true
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navebarItems.map((item) => (
            <li className="nav-li" key={item}>
              <button  className="nav-btn"  onClick={()=>navigate(item.slug)}>
                {item.name}
              </button>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
