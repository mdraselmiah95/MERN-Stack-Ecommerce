import React from "react";
import FlashCard from "../../components/App/flashDeals/FlashCard";
import Data from "../../constants/Data";

const Products = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1>All Products</h1>
        </div>
        <div className="d_flex">
          {Data?.allProducts?.map((item) => {
            return <FlashCard key={item.id} product={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
