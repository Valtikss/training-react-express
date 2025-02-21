import RestaurantList from "@components/RestaurantList";
import { Typography } from "@mui/material";
import { useRestaurants } from "@/hooks";

const Restaurants = () => {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) {
    return <Typography variant="h4">Chargement des restaurants...</Typography>;
  }
  if (error) {
    return <Typography variant="h4">{error}</Typography>;
  }

  return (
    <>
      <RestaurantList data={restaurants} />
    </>
  );
};

export default Restaurants;
