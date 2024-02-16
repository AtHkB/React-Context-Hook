import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function BookList() {
  const { dark, light, isLightTheme } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: themeStyles.text, background: themeStyles.bg }}
    >
      {isAuth ? (
        <ul>
          <li style={{ background: themeStyles.ui }}>The name of the wind</li>
          <li style={{ background: themeStyles.ui }}>The way of kings</li>
          <li style={{ background: themeStyles.ui }}>The final empire</li>
        </ul>
      ) : (
        "Please Login to see the content"
      )}
    </div>
  );
}
