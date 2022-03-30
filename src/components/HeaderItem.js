import React from "react";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
const HeaderItem = ({ text, trunc }) => {
  return (
    <li className="nav-item nav-header">
      {trunc ? (
        <LinearScaleOutlinedIcon className="scale-icon" />
      ) : (
        <span className="">{text}</span>
      )}
    </li>
  );
};

export default HeaderItem;
