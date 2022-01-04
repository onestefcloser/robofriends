import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="ps2">
      <input
        className="pa3 ba bg-lightest-blue"
        type="search"
        placeholder="Search Cats"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
