import React from "react";
import "./row-header.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const RowHeader = () => {
  return (
    <div className="row content-header">
      <div className="content-header-left">
        <h2 className="content-header-title">Shop</h2>
        <div className="breadcrumbs">
          <a href="#">
            <HomeOutlinedIcon className="home-icon bc-link" />
          </a>
          <ChevronRightOutlinedIcon />
          <a href="#" className="bc-link">
            ECommerce
          </a>
          <ChevronRightOutlinedIcon />
          <span className="current-location">Shope</span>
        </div>
      </div>
      <div className="content-header-right">
        <button className="dropdown-btn">
          <SettingsOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default RowHeader;
