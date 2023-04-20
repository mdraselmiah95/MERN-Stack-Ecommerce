import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/App/common/Header/Header";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/404";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
        </Route>
        <Route path="/carts">
          <Route index element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Layout;
