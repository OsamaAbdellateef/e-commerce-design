import { useContext, useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ThemeContextProvider from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
import RowHeader from "./components/rowHeader/RowHeader";
import FilterSidebar from "./components/filterSidebar/FilterSidebar";
import Products from "./components/products/Products";
import { logRoles } from "@testing-library/react";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [close, toggleClose] = useState(false);
  const [trunc, toggleTrunc] = useState(false);
  const [left, toggleLeft] = useState(false);
  useEffect(() => {
    console.log("theme: ", darkMode);
  }, [darkMode]);
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""} `}>
      <Sidebar
        left={left}
        toggleLeft={toggleLeft}
        close={close}
        toggleClose={toggleClose}
        trunc={trunc}
        toggleTrunc={toggleTrunc}
        darkMode={darkMode}
      />

      <main className={`content ${darkMode && "dark"}`}>
        <div className="container">
          <Navbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
            toggleLeft={toggleLeft}
            close={close}
          />
          <RowHeader />
          <section className="products-container">
            <FilterSidebar darkMode={darkMode} />
            <Products
              close={close}
              toggleLeft={toggleLeft}
              darkMode={darkMode}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
