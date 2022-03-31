import React from "react";
import "./product-card.css";
import Rating from "../rateItem/RateItem";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const ProductCard = ({
  name,
  price,
  imgSrc,
  discription,
  brand,
  close,
}) => {
  return (
    <div className="product-card">
      <div className="card-container">
        <div className="img-container">
          <img src={imgSrc} />
        </div>
        <div className="mid-part">
          <div className="item-wrapper">
            <Rating num="four" />
            <h2 className="item-price">{price + "$"}</h2>
          </div>
          <h1 className="item-name">
            <a href="#">
              {name.length > 19 ? name.substring(0, 19) + "..." : name}
            </a>
          </h1>
          <p className="item-desc">
            {discription.length > 20
              ? discription.substring(0, 27) + "..."
              : discription}
          </p>
        </div>
        <div className={`item-options ${close && "row"}`}>
          <a href="#">
            <FavoriteBorderOutlinedIcon />
            <span>Wishlist</span>
          </a>
          <a href="#">
            <FavoriteBorderOutlinedIcon />
            <span>View In Cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};
