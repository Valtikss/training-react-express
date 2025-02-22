import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocalStorage, useRestaurants } from "@/hooks";

import RestaurantList from "@components/RestaurantList";
import SearchBar from "@components/SearchBar";

const Restaurants = () => {
  // Fetch restaurants
  const { restaurants, loading, error } = useRestaurants();
  // Local storage
  const { getValue, setValue } = useLocalStorage<string>(
    "restaurants-search-filter"
  );

  // Filter state
  const [filter, setFilter] = useState<string>("");
  const handleFilterChange = (value: string) => {
    setFilter(value);
    setValue(value);
  };

  // Load filter from local storage
  useEffect(() => {
    const storedFilter = getValue();
    if (storedFilter !== null && filter === "") {
      setFilter(storedFilter);
    }
  }, []);

  // Display loading or error message
  if (loading) {
    return <Typography variant="h4">Chargement des restaurants...</Typography>;
  }
  if (error) {
    console.log("Error while fetching restaurants : ", error);
    return <Typography variant="h4">{error}</Typography>;
  }

  return (
    <>
      <Box padding={2}>
        <SearchBar value={filter} onChange={handleFilterChange} />
      </Box>
      <RestaurantList filter={filter} data={restaurants} />
    </>
  );
};

export default Restaurants;
