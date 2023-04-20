import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/App/common/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Layout;
