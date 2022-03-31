import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SlidebarHeader = ({ logo, toggleClose, toggleLeft }) => {
  return (
    <div className="sidebar-header">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a href="#" className="logo-container">
            <img className="logo-img" src={logo} alt="vuexy" />
            <h5 className="logo-text">Vuexy</h5>
          </a>
        </li>
        <li
          className="nav-item pin-sidebar"
          onClick={() => {
            toggleClose((c) => !c);
          }}
        >
          <span className="outer-circle">
            <span className="inner-circle"></span>
          </span>
        </li>
        <li
          className="nav-item left-toggler"
          onClick={() => {
            toggleLeft((t) => !t);
          }}
        >
          <CloseOutlinedIcon />
        </li>
      </ul>
    </div>
  );
};

export default SlidebarHeader;
