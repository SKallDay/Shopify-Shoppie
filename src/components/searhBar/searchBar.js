import React, { useState } from "react";
import "./searchBar.css";

// react component
export const SearchBar = ({ 
  queryBySearch
 }) => {
  const [search, setSearch] = useState("");

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSumbit = (e) => {
    e.preventDefault();
    queryBySearch(search);
  };


  return (
    <div className="search__container">
      <h3 className="search__heading">Movie titles</h3>
      <form className="search__form" onSubmit={handleFormSumbit}>
        <label className="search__label" aria-label="Search for Movies">Search:</label>
        <input
          aria-label="Search for movies"
          className="search__input"
          type="text"
          value={search}
          onChange={getSearch}
          placeholder="Find Moves..."
        />
      </form>
    </div>
  );
};

// export
export default SearchBar;
