import React from "react";
import "./ratings.css";
import RateItem from "../rateItem/RateItem";

const Ratings = () => {
  return (
    <div>
      <div className="ratings-item">
        <div className="rate">
          <RateItem num="four" />
          <span>& up</span>
        </div>
        <div className="price">176</div>
      </div>
      <div className="ratings-item">
        <div className="rate">
          <RateItem num="three" />
          <span>& up</span>
        </div>
        <div className="price">291</div>
      </div>
      <div className="ratings-item">
        <div className="rate">
          <RateItem num="two" />
          <span>& up</span>
        </div>
        <div className="price">190</div>
      </div>
      <div className="ratings-item">
        <div className="rate">
          <RateItem num="one" />
          <span>& up</span>
        </div>
        <div className="price">20</div>
      </div>
    </div>
  );
};

export default Ratings;
