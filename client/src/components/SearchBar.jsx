import React from "react";

const SearchBar = ({e, onSearchChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Rechercher un restaurant..."
        className="p-3 border border-gray-300 rounded-lg shadow-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={e}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
