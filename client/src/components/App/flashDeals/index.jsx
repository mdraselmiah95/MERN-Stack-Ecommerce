import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FlashCard from "./FlashCard";
import Data from "../../../constants/Data";

const FlashDeals = () => {
  const { productsInfo, isLoading } = useSelector((state) => state.products);
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1> Best Deals</h1>
        </div>
        <div className="d_flex">
          {productsInfo?.length > 0 &&
            productsInfo?.map((item) => {
              return <FlashCard key={item._id} product={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
