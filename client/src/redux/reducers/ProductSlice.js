import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  productsInfo: [],
  product: {},
  message: "",
  dashboard: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productPending: (state) => {
      state.isLoading = true;
    },
    productSuccess: (state, { payload }) => {
      state.error = "";
      state.isLoading = false;
      state.productsInfo = payload;
    },
    productFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.productsInfo = [];
    },
  },
});
