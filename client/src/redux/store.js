import { configureStore } from "@reduxjs/toolkit";
// import { productSlice } from "./reducers/ProductSlice";
import productReducer from "./reducers/ProductSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
