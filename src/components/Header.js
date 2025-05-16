import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Weather App</h1>
      <button onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
}

export default Header;
