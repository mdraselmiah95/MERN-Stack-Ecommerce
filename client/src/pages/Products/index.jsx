import React, { useEffect } from "react";
import { CircularProgress, Stack } from "@mui/material";
import FlashCard from "../../components/App/flashDeals/FlashCard";
import Data from "../../constants/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/ProductAction";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { productsInfo, isLoading } = useSelector((state) => state.products);

  const getProducts = (query) => {
    if (query) return dispatch(getAllProducts(query));
    return dispatch(getAllProducts());
  };

  useEffect(() => {
    getProducts(search);
  }, [search]);

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1>All Products</h1>
        </div>
        <div className="d_flex">
          {isLoading && (
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Stack>
          )}
          {productsInfo?.length > 0 &&
            productsInfo?.map((product) => (
              <FlashCard
                product={product}
                key={product._id}
                // addToCart={addToCart}
              />
            ))}
          {!isLoading && productsInfo.length === 0 && (
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>No Products Found</h1>
            </Stack>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
