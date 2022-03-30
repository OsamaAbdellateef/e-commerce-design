import React, { useState } from "react";
import "./featured-button.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const FeaturedButton = ({ comps, elements, func }) => {
  const [drop, toggleDrop] = useState(false);
  return (
    <div className={`dropdown-comp-container ${drop && "drop"}`}>
      <div
        onClick={() => {
          toggleDrop((d) => !d);
        }}
        className="triggerEvent"
      >
        {comps}
      </div>
      <ul>
        {elements.map((element, index) => (
          <li
            key={index}
            onClick={() => {
              func(element);
              toggleDrop((d) => !d);
            }}
          >
            <a role="menuitem" target="_self" href="#/">
              {element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedButton;
