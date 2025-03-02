import { Box, Button, Link, Stack, Typography } from "@mui/material";

interface RestaurantDescriptionProps {
  restaurant: RestaurantDTO;
  handleEditRestaurant: () => void;
  handleClickDelete: () => void;
}

const RestaurantDescription: React.FC<RestaurantDescriptionProps> = ({
  restaurant,
  handleEditRestaurant,
  handleClickDelete,
}) => {
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
  );
};

export default RestaurantDescription;
