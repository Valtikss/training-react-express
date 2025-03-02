import { Box } from "@mui/material";
import CreateOrUpdateRestaurant from "@/components/CreateOrUpdateRestaurant";
import { restaurantAPI as RestaurantAPI } from "@/services/api";
import { useNavigate } from "react-router-dom";
const CreateRestaurant = () => {
  const navigate = useNavigate();
  const handleSaveRestaurant = (restaurant: CreateOrUpdateRestaurantDTO) => {
    RestaurantAPI.create(restaurant).then((res) =>
      navigate(`/restaurants/${res.id}`)
    );
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
