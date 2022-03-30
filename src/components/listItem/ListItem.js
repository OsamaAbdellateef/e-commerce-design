import React from "react";
import "./list-item.css";

const ListItem = ({ icon, text, trunc }) => {
  return (
    <li className="list-item">
      <a href="#">
        {icon}
        <span className={`${trunc && "text-trunc"}`}>{text}</span>
      </a>
    </li>
  );
};

export default ListItem;
