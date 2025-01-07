import React from "react";
import "./Header.css";

function Header({ title, theme, setTheme }) {
  return (
    <header className={`header ${theme}`}>
      <h1>{title}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
