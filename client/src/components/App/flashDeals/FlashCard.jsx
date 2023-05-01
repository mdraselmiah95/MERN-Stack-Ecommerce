import React from "react";
import Rating from "@mui/material/Rating";

const FlashCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product_container ">
      <div className="product mtop">
        <div className="img">
          <span className="discount">% Off</span>
          <img src={product?.cover} alt="product image" />
        </div>
        <div className="product-details">
          <h3>{product?.name}</h3>
          <Rating name="half-rating" defaultValue={4.6} precision={0.5} />
          <div className="price">
            <h4>${product?.price}.00 </h4>
            <button>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
