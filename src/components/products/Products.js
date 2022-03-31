import React, { useState, useEffect } from "react";
import "./products.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ProductCard } from "../ProductCard/ProductCard";
import FeaturedButton from "../featuredButton/FeaturedButton";
import { MarkEmailUnreadSharp } from "@mui/icons-material";
import Pagination from "../pagination/Pagination";
import GridCard from "../gridCard/GridCard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 5",
    price: 339.99,
    rating: 4,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 2,
    name: "Apple iPhone 11 (64GB, Black)",
    price: 669.99,
    rating: 5,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 3,
    name: "Apple iMac 27-inch",
    price: 999.99,
    rating: 4,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 4,
    name: "OneOdio A71 Wired Headphones",
    price: 49.99,
    rating: 3,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 5,
    name: "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
    price: 999.99,
    rating: 4,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 6,
    name: "Switch Pro Controller",
    price: 429.99,
    rating: 3,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 7,
    name: "Google - Google Home - White/Slate fabric",
    price: 129.29,
    rating: 4,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "google",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 8,
    name: "Sony 4K Ultra HD LED TV",
    price: 7999.99,
    rating: 5,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "apple",
    available: true,
    colors: ["red", "purple", "green"],
  },
  {
    id: 9,
    name: "OnePlus 7 Pro",
    price: 14.99,
    rating: 4,
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
    discription:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
    brand: "Philips",
    available: true,
    colors: ["red", "purple", "green"],
  },
];
const staticData = products.map((e) => e);

const mainProd = products;

const Products = ({ close, darkMode }) => {
  const [data, setData] = useState(mainProd);
  const [category, setCategory] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [grid, toggleGrid] = useState(false);

  useEffect(() => {
    let filteredData = [];
    if (searchTerm) {
      filteredData = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (category === "featured") {
        console.log("filteredData:", filteredData);
        setData([...filteredData]);
      } else if (category === "highest") {
        let sortedData = filteredData.sort((a, b) => b.price - a.price);
        console.log("highestDvdfgata: ", sortedData);
        setData([...sortedData]);
      } else if (category === "lowest") {
        console.log("lowest");
        let sosrtedData = filteredData.sort((a, b) => a.price - b.price);
        console.log(sosrtedData);
        setData([...sosrtedData]);
      }
    } else {
      if (category === "featured") {
        setData(staticData);
      } else if (category === "highest") {
        let sortedData = products.sort((a, b) => b.price - a.price);
        console.log("highestDvdfgata: ", sortedData);
        setData([...sortedData]);
      } else if (category === "lowest") {
        console.log("lowest");
        let sosrtedData = products.sort((a, b) => a.price - b.price);
        console.log(sosrtedData);
        setData([...sosrtedData]);
      }
    }
  }, [searchTerm, category]);

  return (
    <div className={`products ${darkMode && "dark"}`}>
      <div className="upper-section">
        <div className="left-part">
          <span>{data.length} results found</span>
          <span className="filter-menu">
            <MenuOutlinedIcon className="filter-sidebar-toggler" />
          </span>
        </div>
        <div className="right-part">
          <div className="btns-container">
            <FeaturedButton
              toggle
              func={setCategory}
              elements={["featured", "lowest", "highest"]}
              comps={
                <button className="drop-down-btn">
                  <span className="btn-text">{category}</span>
                  <KeyboardArrowDownOutlinedIcon />
                </button>
              }
            />
            <div className="two-btns-in-one">
              <button
                className={`${!grid && "active"}`}
                onClick={() => {
                  toggleGrid(false);
                }}
              >
                <GridViewOutlinedIcon />
              </button>
              <button
                className={`${grid && "active"}`}
                onClick={() => {
                  toggleGrid(true);
                }}
              >
                <ListOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="search-input">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Product"
        />
        <span className="search-icon">
          <SearchOutlinedIcon />
        </span>
      </div>
      {/*Mapping through the cards*/}
      <div
        className={`product-list ${grid && "full-width"} ${darkMode && "dark"}`}
      >
        {data.map((p) =>
          grid ? (
            <GridCard
              key={p.id}
              name={p.name}
              price={p.price}
              imgSrc={p.img}
              discription={p.discription}
              brand={p.brand}
              rate={p.rating}
            />
          ) : (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              imgSrc={p.img}
              discription={p.discription}
              brand={p.brand}
              rate={p.rating}
              close={close}
            />
          )
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
