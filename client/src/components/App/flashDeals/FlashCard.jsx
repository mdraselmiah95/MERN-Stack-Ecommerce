import React from "react";
import Rating from "@mui/material/Rating";

const FlashCard = ({ product, addToCart }) => {
  return (
    <div className="product_container ">
      <div className="product mtop">
        <div className="img">
          {product?.discount > 0 && (
            <span className="discount">{product?.discount}% Off</span>
          )}
          <img src={product?.images.url} alt="product image" />
        </div>
        <div className="product-details">
          <h3>{product?.name}</h3>
          <Rating
            className="rating"
            name="half-rating"
            defaultValue={product?.rating}
            precision={0.5}
          />
          <div className="price">
            <h4>${product?.price}.00 </h4>
            <button onClick={() => addToCart(product)}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
