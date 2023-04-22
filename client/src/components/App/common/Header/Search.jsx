import React from "react";
import assets from "../../../../assets";

const Search = () => {
  const handleKeyDown = async (event) => {};
  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width ">
          <img src={assets?.images?.logo} alt="logo" />
        </div>
        <div className="search-box f_flex">
          <i className="fa fa-search" />
          <input
            type="text"
            placeholder="Search and hit enter..."
            onKeyDown={handleKeyDown}
          />
          <span>All Category</span>
        </div>
      </div>
    </section>
  );
};

export default Search;
