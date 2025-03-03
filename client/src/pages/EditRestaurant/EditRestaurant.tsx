import { Box, Divider, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import CreateOrUpdateRestaurant from "@/components/CreateOrUpdateRestaurant";
import DishesList from "@/components/DishesList";
import { restaurantAPI as RestaurantAPI } from "@/services/api";
import { useRestaurant } from "@/hooks";

const EditRestaurant = () => {
  // Get id from path /restaurants/:id/edit
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <Typography variant="h4">Restaurant non trouvé</Typography>;
  }
  const restaurantId = parseInt(id);

  const navigate = useNavigate();
  const { restaurant, loading, error } = useRestaurant(restaurantId);

  const handleSaveRestaurant = (uRestaurant: CreateOrUpdateRestaurantDTO) => {
    RestaurantAPI.update(restaurantId, uRestaurant).then((res) =>
      navigate(`/restaurants/${res.id}`)
    );
  };
  const handleCancel = () => {
    navigate("/restaurants");
  };

  // Return if no restaurant or loading or error
  if (loading)
    return <Typography variant="h4">Chargement du restaurant...</Typography>;
  if (error) return <Typography variant="h4">{error}</Typography>;
  if (!restaurant)
    return <Typography variant="h4">Restaurant non trouvé</Typography>;

  return (
    <Box padding={2}>
      <Box
        width={"100%"}
        sx={{ background: "#E3E3E3", borderRadius: 3 }}
        padding={2}
      >
        <CreateOrUpdateRestaurant
          fetchedRestaurant={restaurant}
          handleSaveRestaurant={handleSaveRestaurant}
          handleCancel={handleCancel}
        />
        <Divider sx={{ marginY: 2 }} />
        <DishesList restaurantId={restaurantId} isEditMode />
      </Box>
    </Box>
  );
};

export default EditRestaurant;
