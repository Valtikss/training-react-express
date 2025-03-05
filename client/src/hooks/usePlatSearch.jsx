import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function usePlatSearch(plats) {
    const [searchTerm, setSearchTerm] = useLocalStorage('platSearchTerm', '');
    const [filteredPlats, setFilteredPlats] = useState(plats);

    useEffect(() => {
        const filtered = plats.filter(plat =>
            plat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plat.restaurant_id.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPlats(filtered);
    }, [searchTerm, plats]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    return {
        searchTerm,
        filteredPlats,
        handleSearchChange,
        handleClearSearch
    };
}

export default usePlatSearch; 