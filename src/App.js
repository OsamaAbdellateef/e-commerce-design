import { useContext, useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import ThemeContextProvider from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
import RowHeader from "./components/rowHeader/RowHeader";
import FilterSidebar from "./components/filterSidebar/FilterSidebar";
import Products from "./components/products/Products";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [close, toggleClose] = useState(false);
  const [trunc, toggleTrunc] = useState(false);
  const [left, toggleLeft] = useState(false);
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""} `}>
      <Sidebar
        left={left}
        toggleLeft={toggleLeft}
        close={close}
        toggleClose={toggleClose}
        trunc={trunc}
        toggleTrunc={toggleTrunc}
      />

      <main className="content">
        <div className="container">
          <Navbar toggleLeft={toggleLeft} close={close} />
          <RowHeader />
          <section className="products-container">
            <FilterSidebar />
            <Products close={close} toggleLeft={toggleLeft} />
          </section>

          <h1
            onClick={() => {
              console.log(darkMode);
            }}
          >
            main content
            <button
              onClick={() => {
                toggleTheme();
              }}
            >
              toggle theme
            </button>
          </h1>
        </div>
      </main>
    </div>
  );
}

export default App;
