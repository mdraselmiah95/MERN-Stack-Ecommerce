import { notify } from "../../utils/helper";
import {
  cartFailure,
  cartPending,
  cartSuccess,
  clearCart,
} from "../reducers/CartSlice";

export const storeProductInCart =
  (cartProducts, product) => async (dispatch) => {
    dispatch(cartPending());
    try {
      const carts = new Array(...cartProducts);
      carts.push(product);
      dispatch(cartSuccess(carts));
      notify("Product Added to Cart", "success");
    } catch (error) {
      dispatch(cartFailure(error.message));
      notify("Something went wrong", "error");
    }
  };

export const clearCartsAction = () => async (dispatch) => {
  dispatch(cartPending());
  try {
    dispatch(clearCart());
    notify("Cart Cleared", "success");
  } catch (error) {
    dispatch(cartFailure(error.message));
    notify("Something went wrong", "error");
  }
};

export const removeSpecificCartFromCartAction =
  (cartProducts, cart) => async (dispatch) => {
    try {
      dispatch(cartPending());
      const carts = new Array(...cartProducts);
      const updatedCarts = carts.filter((item) => item._id !== cart._id);
      dispatch(cartSuccess(updatedCarts));
      notify("Product removed from cart", "success");
    } catch (error) {
      dispatch(cartFailure(error.message));
      notify("Something went wrong", "error");
    }
  };
