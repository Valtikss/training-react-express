import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { restaurant as RestaurantAPI } from "@/services/api";
import { useRestaurant } from "@/hooks";

const RestaurantDetail = () => {
  // Get id from path /restaurants/:id
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Typography variant="h4">Restaurant non trouvé</Typography>;
  }
  const restaurantId = parseInt(id);

  // Fetch restaurant
  const { restaurant, loading, error } = useRestaurant(restaurantId);

  // Handle edit restaurant
  const navigate = useNavigate();
  const handleEditRestaurant = () => {
    navigate(`/restaurants/${restaurantId}/edit`);
  };

  // Handle delete restaurant
  const handleClickDelete = () => {
    if (
      window.confirm(
        "Voulez-vous supprimer ce restaurant ? Cette action est irréversible."
      )
    ) {
      RestaurantAPI.delete(restaurantId)
        .then(() => {
          navigate("/restaurants");
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression du restaurant:", error);
        });
    }
  };

  // Display loading or error message
  if (loading)
    return <Typography variant="h4">Chargement du restaurant...</Typography>;
  if (error) return <Typography variant="h4">{error}</Typography>;
  if (!restaurant)
    return <Typography variant="h4">Restaurant non trouvé</Typography>;

  return (
    <>
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
          <Typography variant="body1">
            Website:{" "}
            <Link href={restaurant.website} target={"_blank"}>
              {restaurant.website}
            </Link>
          </Typography>
          <Stack mt={1} direction={"row"} spacing={1} alignItems={"center"}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleEditRestaurant}
            >
              Modifier
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleClickDelete}
            >
              Supprimer
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default RestaurantDetail;
