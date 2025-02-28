import { Box } from "@mui/material";
import CreateOrUpdateRestaurant from "@/components/CreateOrUpdateRestaurant";
import { restaurant as RestaurantAPI } from "@/services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateRestaurant = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<CreateRestaurantDTO>({
    name: "",
    address: "",
    cuisine: "",
    rating: 0,
    phone: "",
    website: "",
    image: "",
  });
  const handleChangeRestaurant = (restaurant: CreateRestaurantDTO) => {
    setRestaurant(restaurant);
  };
  const handleSaveRestaurant = () => {
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
          restaurant={restaurant}
          handleChangeRestaurant={handleChangeRestaurant}
          handleSaveRestaurant={handleSaveRestaurant}
          handleCancel={handleCancel}
        />
      </Box>
    </Box>
  );
};

export default CreateRestaurant;
