import React from "react";
import FlashCard from "./FlashCard";
import Data from "../../../constants/Data";

const FlashDeals = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1> Best Deals</h1>
        </div>
        <div className="d_flex">
          {Data?.productItems?.map((item) => {
            return <FlashCard key={item.id} product={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
