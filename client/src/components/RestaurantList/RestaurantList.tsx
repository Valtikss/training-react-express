import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
  data: RestaurantDTO[];
  filter: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ filter, data }) => {
  const filteredData = data.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(filter.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(filter.toLowerCase()) ||
      filter === ""
  );

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredData.length ? (
          filteredData.map((restaurant: RestaurantDTO) => (
            <Grid key={restaurant.id} size={4}>
              <RestaurantCard restaurant={restaurant} />
            </Grid>
          ))
        ) : (
          <Box sx={{ width: "100%" }}>Aucun restaurant trouvé</Box>
        )}
      </Grid>
    </Box>
  );
};

export default RestaurantList;
