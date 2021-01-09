import React, { useState } from 'react';

// react component
export const SearchBar = ({
  queryBySearch,
}) => {
  const [search, setSearch] = useState('');

  const getSearch = e => {
    setSearch(e.target.value);
  }

  const handleFormSumbit = e => {
    e.preventDefault();
    queryBySearch(search);
  }

  return (
   <>
    <h3>Movie titles</h3>
    <form onSubmit={handleFormSumbit}>
      <label>
        Search:
        <input className="search-input" type="text" value={search} onChange={getSearch} placeholder="Find Moves... Harry Potter"/>
      </label>
    </form>
   </>
  );
};

// export
export default SearchBar;

