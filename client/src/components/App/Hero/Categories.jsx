import React from "react";
import { categories } from "../../../constants/categories";

const Categories = () => {
  return (
    <>
      <div className="category">
        {categories.map((cat, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={cat.cateImg} alt="category image" />
              <span>{cat.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
