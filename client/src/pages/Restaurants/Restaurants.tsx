import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocalStorage, useRestaurants } from "@/hooks";

import RestaurantList from "@components/RestaurantList";
import SearchBar from "@components/SearchBar";
import { useNavigate } from "react-router-dom";

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

  // Button to create a new restaurant
  const navigate = useNavigate();
  const handleCreateRestaurant = () => {
    navigate("/restaurants/create");
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
        <Box
          width={"100%"}
          sx={{ background: "#E3E3E3", borderRadius: 3 }}
          padding={2}
        >
          <Stack direction={"row"} spacing={2}>
            <SearchBar value={filter} onChange={handleFilterChange} />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleCreateRestaurant}
            >
              Créer un restaurant
            </Button>
          </Stack>
        </Box>
      </Box>
      <RestaurantList filter={filter} data={restaurants} />
    </>
  );
};

export default Restaurants;
