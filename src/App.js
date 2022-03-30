import { useContext } from "react";
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

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""} `}>
      <Sidebar />

      <main className="content">
        <div className="container">
          <Navbar />
          <RowHeader />
          <section className="products-container">
            <FilterSidebar />
            <Products />
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
