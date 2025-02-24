import { Search } from "lucide-react";
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {
  return (
    // Barre de recherche stylisée
    <div className="relative w-full max-w-lg mb-6">
      {/* Input stylisé */}
      <input
        type="text"
        placeholder="🔍 Rechercher un kebab légendaire..."
        className="p-4 pl-14 border-4 border-black rounded-xl w-full bg-yellow-400 
                   focus:ring-4 focus:ring-red-500 focus:outline-none text-black 
                   text-lg font-bold shadow-[6px_6px_0px_#000] 
                   hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#000] 
                   transition-all duration-200"
        value={value}
        onChange={onChange}
      />
      
      {/* Icône de recherche animée */}
      <Search 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" 
        size={28} 
      />
    </div>
  );

};
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
