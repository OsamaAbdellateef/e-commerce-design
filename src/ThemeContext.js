import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [darkMode, toggleDarkMode] = useState(true);
  const toggleTheme = () => {
    toggleDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
