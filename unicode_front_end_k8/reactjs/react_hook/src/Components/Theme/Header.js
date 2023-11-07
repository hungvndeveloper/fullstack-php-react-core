import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Unicode Academy</h1>
      <button
        type="button"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme == "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Header;
