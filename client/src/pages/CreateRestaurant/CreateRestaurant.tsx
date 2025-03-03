import { Box } from "@mui/material";
import CreateOrUpdateRestaurant from "@/components/CreateOrUpdateRestaurant";
import { restaurantAPI as RestaurantAPI } from "@/services/api";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "@/store";

const CreateRestaurant = () => {
  const setToast = useToastStore((state) => state.setToast);
  const navigate = useNavigate();
  const handleSaveRestaurant = (restaurant: CreateOrUpdateRestaurantDTO) => {
    RestaurantAPI.create(restaurant)
      .then((res) => {
        navigate(`/restaurants/${res.id}`);
        setToast({
          message: "Restaurant created successfully",
          type: "success",
          isOpen: true,
        });
      })
      .catch((error) => {
        setToast({
          message: "Échec de la création du restaurant",
          type: "error",
          isOpen: true,
        });
      });
  };
  const handleCancel = () => {
    navigate("/restaurants");
  };

  return (
    <Box padding={2}>
      <Box
        width={"100%"}
        sx={{ background: "#E3E3E3", borderRadius: 3 }}
        padding={2}
      >
        <CreateOrUpdateRestaurant
          handleSaveRestaurant={handleSaveRestaurant}
          handleCancel={handleCancel}
        />
      </Box>
    </Box>
  );
};

export default CreateRestaurant;
