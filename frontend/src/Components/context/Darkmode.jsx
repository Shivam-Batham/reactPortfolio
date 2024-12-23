import { createContext, useEffect, useState } from "react";

const DarkmodeContext = createContext();

function DarkmodeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(true);
  const color = { light: "bg-[#b8e8ff]", dark: "bg-[#1b1a1a]" };
  const ToggleDarkMode = () => {
    setDarkmode(!darkmode)
  };
  useEffect(()=>{
    darkmode ? document.body.className = "dark-mode" : document.body.className = "" 
  },[darkmode])
  return (
    <>
      <DarkmodeContext.Provider value={{ darkmode, ToggleDarkMode}}>
        {children}
      </DarkmodeContext.Provider>
    </>
  );
}

export { DarkmodeContext, DarkmodeProvider };
