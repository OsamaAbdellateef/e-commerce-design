import React from "react";
import RadioButton from "../radioButton/RadioButton";
import "./filter-sidebar.css";
import Ratings from "../ratings/Ratings";

const ranges = {
  values: [
    { id: "all", value: "all" },
    { id: "<= $10", value: "<= $10" },
    { id: "$10 - $100", value: "$10 - $100" },
    { id: ">= $500", value: ">= $500" },
  ],
  name: "ranges",
};

const categories = {
  values: [
    { id: "Appliances", value: "Appliances" },
    { id: "Audio", value: "Audio" },
    {
      id: "Cameras & Camcorders",
      value: "Cameras & Camcorders",
    },
    {
      id: "Car Electronics & GPS",
      value: "Car Electronics & GPS",
    },
    {
      id: "Cell Phones",
      value: "Cell Phones",
    },

    {
      id: "Computers & Tablets",
      value: "Computers & Tablets",
    },
    {
      id: "Health, Fitness & Beauty",
      value: "Health, Fitness & Beauty",
    },
    {
      id: "Office & School Supplies",
      value: "Office & School Supplies",
    },
    {
      id: "TV & Home Theater",
      value: "TV & Home Theater",
    },
  ],
  name: "categories",
};

const brands = {
  values: [
    { id: "Insignia™", value: "Insignia™" },
    { id: "Samsung", value: "Samsung" },
    { id: "Metra", value: "Metra" },
    { id: "HP", value: "HP" },
    { id: "Apple", value: "Apple" },
    { id: "GE", value: "GE" },
    { id: "Sony", value: "Sony" },
    { id: "Incipio", value: "Incipio" },
    { id: "KitchenAid", value: "KitchenAid" },
    { id: "Whirlpool", value: "Whirlpool" },
  ],
  name: "brands",
};

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar-container">
      <h1 className="filter-sidebar-header">Filter</h1>
      <div className="filter-sidebar">
        <h1 className="header">Multi Range</h1>
        {ranges.values.map((e, index) => (
          <RadioButton
            key={index}
            iD={e.id}
            value={e.value}
            name={ranges.name}
          />
        ))}
        <h1 className="header">Categories</h1>
        {categories.values.map((e, index) => (
          <RadioButton
            key={index}
            iD={e.id}
            value={e.value}
            name={categories.name}
          />
        ))}

        <h1 className="header">Brands</h1>
        {brands.values.map((e, index) => (
          <RadioButton
            key={index}
            iD={e.id}
            value={e.value}
            name={brands.name}
          />
        ))}

        <h1 className="header" style={{ marginBottom: "2rem" }}>
          Ratings
        </h1>
        <Ratings />
      </div>
    </div>
  );
};

export default FilterSidebar;
