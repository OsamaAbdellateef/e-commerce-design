import React from "react";
import "./pagination.css";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-container">
        <div className="pagination-left">
          <button>
            <KeyboardArrowLeftOutlinedIcon />
          </button>
        </div>
        <div className="pagination-center">
          <button
            className="active"
            onClick={() => {
              console.log("one");
            }}
          >
            1
          </button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className="pagination-right">
          <button>
            <KeyboardArrowRightOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
