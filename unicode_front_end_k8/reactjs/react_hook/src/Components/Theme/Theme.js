import React, { createContext, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import "./Theme.css";

export const ThemeContext = createContext();

const Theme = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`theme-${theme}`}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <Header />
        <Content />
      </ThemeContext.Provider>
    </div>
  );
};

export default Theme;
