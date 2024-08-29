import { createContext, useEffect, useState } from "react";

const DarkmodeContext = createContext();

function DarkmodeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(true);
  const color = { light: "bg-[#b8e8ff]", dark: "bg-[#1b1a1a]" };
  const ToggleDarkMode = () => {
    setDarkmode(!darkmode)
  };
  useEffect(()=>{
    darkmode ? document.body.style = " background-image: linear-gradient(90deg, #070606 0%, #101010 100%)" : document.body.style = "background-image: linear-gradient(90deg, #fff1eb 0%, #ace0f9 100%)" 
  },[darkmode])
  return (
    <>
      <DarkmodeContext.Provider value={{ darkmode, ToggleDarkMode, color }}>
        {children}
      </DarkmodeContext.Provider>
    </>
  );
}

export { DarkmodeContext, DarkmodeProvider };
