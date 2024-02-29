import React from "react";

export const SearchInputComponent = ({ searchValue, handleInputChange }) => {
  return (
    <input
      onChange={handleInputChange}
      value={searchValue}
      type="text"
      className="form-control w-50"
      placeholder="Search meal"
    />
  );
};
