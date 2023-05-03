import { configureStore } from "@reduxjs/toolkit";
// import { productSlice } from "./reducers/ProductSlice";
import productReducer from "./reducers/ProductSlice";
import cartReducer from "./reducers/CartSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
