import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <span onClick={toggleTheme} style={{ cursor: "pointer", float: "right" }}>
      {isLightTheme ? "Dark Mode 🌚" : "Light Mode 🌝"}
    </span>
  );
}
