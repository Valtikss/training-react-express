import { Box, Stack, Typography } from "@mui/material";

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
  if (!restaurant)
    return <Typography variant="h4">Restaurant non trouvé</Typography>;

  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Box maxWidth={"30%"}>
        <img src={restaurant.image} alt={restaurant.name} />
      </Box>
      <Box padding={2}>
        <Stack spacing={0} justifyContent="center" paddingBottom={0.5}>
          <Typography variant="h4" lineHeight={1}>
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Restauration {restaurant.cuisine}
          </Typography>
        </Stack>
        <Typography variant="body1">{restaurant.address}</Typography>
        <Typography variant="body1">Rating: {restaurant.rating}</Typography>
        <Typography variant="body1">Phone: {restaurant.phone}</Typography>
        <Typography variant="body1">Website: {restaurant.website}</Typography>
      </Box>
    </Stack>
  );
};

export default Restaurant;
