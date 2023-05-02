import axios from "axios";
import {
  productFailure,
  productPending,
  productSuccess,
} from "../reducers/ProductSlice";
import { getAPI } from "../../API/CallAPI";

export const getAllProducts = (params) => async (dispatch) => {
  dispatch(productPending());
  try {
    if (!params) params = "";
    const response = await getAPI(`/products${params}`);
    if (response.success === true) {
      dispatch(productSuccess(response.products));
    } else {
      dispatch(productFailure(response.message));
    }
  } catch (error) {
    dispatch(productFailure(error.message));
  }
};
