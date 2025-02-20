import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-md mb-4">
      <input
        type="text"
        placeholder="Rechercher un restaurant..."
        className="p-2 pl-10 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={value}
        onChange={onChange}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;