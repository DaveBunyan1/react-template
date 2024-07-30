import { useState } from "react";
import "./themeChangeButton.css";

const ThemeChangeButton = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button className="theme-change-button" onClick={toggleTheme}></button>
  );
};

export default ThemeChangeButton;
