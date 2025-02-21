import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
  data: RestaurantDTO[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((restaurant: RestaurantDTO) => (
          <Grid key={restaurant.id} size={4}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantList;
