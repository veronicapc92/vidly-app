import React from "react";

const SearchBar = ({ input, onSearch }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={input}
      onChange={e => onSearch(e.currentTarget.value)}
    />
  );
};

export default SearchBar;
