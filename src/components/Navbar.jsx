import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { dark, light, isLightTheme } = useContext(ThemeContext); //destructure {these light, dark, etc. } from (ThemeContext).
  const { isAuth, toggleAuth } = useContext(AuthContext);

  const themeStyles = isLightTheme ? light : dark; //Very important step to avoid many ternaries and light.bg or dark.bg

  /* console.log("Theme: ", theme); */
  return (
    <nav style={{ background: themeStyles.ui, color: themeStyles.text }}>
      <span onClick={toggleAuth} style={{ cursor: "pointer", float: "left" }}>
        {isAuth ? "Log out" : "Log in"}
      </span>

      <ThemeToggle />
      <h1>Context App</h1>

      <br />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
