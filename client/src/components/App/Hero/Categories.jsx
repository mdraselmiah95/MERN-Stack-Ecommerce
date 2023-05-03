import React from "react";
import { categories } from "../../../constants/categories";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="category">
        {categories.map((cat, index) => {
          return (
            <div
              className="box f_flex"
              key={index}
              onClick={() => navigate(`products?category=${cat.cateName}`)}
            >
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
