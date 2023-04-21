import React from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <Head />
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
