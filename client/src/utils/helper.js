import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const getQueryUrl = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};

export const getCartDetails = (cartProducts) => {
  const carts = {};
  cartProducts.forEach((product) => {
    if (carts[product._id]) {
      carts[product._id].quantity += 1;
    } else {
      carts[product._id] = { ...product, quantity: 1 };
    }
  });
  return convertObjectToArray(carts);
};

export const convertObjectToArray = (object) => {
  return Object.keys(object).map((key) => object[key]);
};
