import React from "react";
import "./grid-card.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RateItem from "../rateItem/RateItem";

const GridCard = ({ name, price, imgSrc, discription, brand, rate }) => {
  let rating = "one";
  switch (rate) {
    case 0:
      rate = 1;
      rating = "one";
      break;
    case 2:
      rate = 2;
      rating = "two";
      break;
    case 3:
      rate = 3;
      rating = "three";
      break;
    case 4:
      rate = 4;
      rating = "four";
      break;
    case 5:
      rate = 5;
      rating = "five";
      break;

    default:
      break;
  }

  return (
    <div className="grid-card">
      <div className="grid-card-container">
        <div className="card-img">
          <img src={imgSrc} />
        </div>
        <div className="card-body">
          <h2 style={{ marginBottom: "1rem" }} className="card-name">
            {name}
          </h2>
          <RateItem num={rating} />
          <p className="card-text">
            {discription.length > 200
              ? discription.substring(0, 180) + "..."
              : discription}
          </p>
        </div>
        <div className="card-options">
          <h1>{"$" + price}</h1>
          <a href="#">
            <FavoriteBorderOutlinedIcon />
            <span>Wishlist</span>
          </a>

          <a href="#">
            <ShoppingCartOutlinedIcon />
            <span>Add to Cart </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
