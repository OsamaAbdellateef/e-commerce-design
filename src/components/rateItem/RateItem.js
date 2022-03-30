import React from "react";
import "./rate-item.css";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
const RateItem = ({ num }) => {
  return (
    <div className="rate-item">
      <div className={`stars-container ${num}`}>
        <StarOutlinedIcon />
        <StarOutlinedIcon />
        <StarOutlinedIcon />
        <StarOutlinedIcon />
        <StarOutlinedIcon />
      </div>
    </div>
  );
};

export default RateItem;
