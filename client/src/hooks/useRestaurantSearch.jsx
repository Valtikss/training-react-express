import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useRestaurantSearch(restaurants) {
    const [searchTerm, setSearchTerm] = useLocalStorage('restaurantSearchTerm', '');
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    useEffect(() => {
        const filtered = restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchTerm, restaurants]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    return {
        searchTerm,
        filteredRestaurants,
        handleSearchChange,
        handleClearSearch
    };
}

export default useRestaurantSearch; 