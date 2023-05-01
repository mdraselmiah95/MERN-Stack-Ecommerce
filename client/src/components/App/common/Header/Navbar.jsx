import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div
            className="catagories d_flex"
            style={{
              display: pathname.startsWith("/products") ? "none" : null,
            }}
          >
            <span className="fa-solid fa-border-all" />
            <h4>
              Categories <i className="fas fa-caret-down" />
            </h4>
          </div>
          <div className="navlink">
            <ul className="link f_flex capitalize">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
