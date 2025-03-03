import { Box, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import DishesList from "@/components/DishesList";
import { restaurantAPI as RestaurantAPI } from "@/services/api";
import RestaurantDescription from "./components/RestaurantDescription";
import { useRestaurant } from "@/hooks";
import { useToastStore } from "@/store";

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
  const setToast = useToastStore((state) => state.setToast);
  const handleClickDelete = () => {
    window.confirm(
      "Voulez-vous supprimer ce restaurant ? Cette action est irréversible."
    ) &&
      RestaurantAPI.delete(restaurantId)
        .then(() => {
          navigate("/restaurants");
          setToast({
            message: "Restaurant supprimé avec succès",
            type: "success",
            isOpen: true,
          });
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression du restaurant:", error);
          setToast({
            message: "Erreur lors de la suppression du restaurant",
            type: "error",
            isOpen: true,
          });
        });
  };

  // Display loading or error message
  if (loading)
    return <Typography variant="h4">Chargement du restaurant...</Typography>;
  if (error) return <Typography variant="h4">{error}</Typography>;
  if (!restaurant)
    return <Typography variant="h4">Restaurant non trouvé</Typography>;

  return (
    <Stack>
      <RestaurantDescription
        restaurant={restaurant}
        handleEditRestaurant={handleEditRestaurant}
        handleClickDelete={handleClickDelete}
      />
      <Box padding={2}>
        <Box
          width={"100%"}
          sx={{ background: "#E3E3E3", borderRadius: 3 }}
          padding={2}
        >
          <DishesList restaurantId={restaurantId} isEditMode={false} />
        </Box>
      </Box>
    </Stack>
  );
};

export default RestaurantDetail;
