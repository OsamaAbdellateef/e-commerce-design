import React, { useState, useEffect } from "react";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listItem/ListItem";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
const DropdownItem = ({ icon, text, subElements, trunc }) => {
  const [expand, toggleExpand] = useState(false);

  return (
    <li
      className="dropdown-item"
      onClick={() => {
        toggleExpand((e) => !e);
      }}
    >
      <div>
        <a href="#">
          {icon}
          <span className={`item-text ${trunc ? "text-trunc" : " "}`}>
            {text}
          </span>
        </a>

        <ArrowForwardIosOutlinedIcon
          className={`${trunc && "text-trunc"} arrow-svg ${
            expand ? "rotate" : " "
          }`}
        />
      </div>
      <ul
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`sublist ${expand && !trunc ? "expand" : " "}`}
      >
        {subElements.map((e, index) => (
          <li key={index} className="sub-item hover-right">
            <a href="#">
              <CircleOutlinedIcon />
              <span>{e}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownItem;
