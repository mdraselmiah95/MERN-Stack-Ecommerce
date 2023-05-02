import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/App/Hero";
import FlashDeals from "../../components/App/flashDeals";
import { getAllProducts } from "../../redux/actions/ProductAction";

const Home = () => {
  const { productsInfo } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsInfo.length === 0) {
      dispatch(getAllProducts());
    }
  }, [productsInfo]);

  return (
    <>
      <Hero />
      <FlashDeals />
    </>
  );
};

export default Home;
