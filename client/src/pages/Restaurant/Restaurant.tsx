import { Box, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { useRestaurant } from "@/hooks";

const Restaurant = () => {
  // Get id from path /restaurants/:id
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Typography variant="h4">Restaurant non trouvé</Typography>;
  }
  const restaurantId = parseInt(id);

  // Fetch restaurant
  const { restaurant, loading, error } = useRestaurant(restaurantId);

  // Display loading or error message
  if (loading)
    return <Typography variant="h4">Chargement du restaurant...</Typography>;
  if (error) return <Typography variant="h4">{error}</Typography>;

  return (
    <Box padding={2}>
      <Typography variant="h4">{restaurant?.name}</Typography>
      <Typography variant="body1">{restaurant?.address}</Typography>
      <Typography variant="body1">Rating: {restaurant?.rating}</Typography>
      <Typography variant="body1">Phone: {restaurant?.phone}</Typography>
      <Typography variant="body1">Website: {restaurant?.website}</Typography>
    </Box>
  );
};

export default Restaurant;
