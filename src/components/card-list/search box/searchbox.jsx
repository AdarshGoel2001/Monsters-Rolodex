import React from "react";
import "./search.styles.css";

export const SearchBox = ({ placeholder, handlechange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handlechange}
    />
  );
};
