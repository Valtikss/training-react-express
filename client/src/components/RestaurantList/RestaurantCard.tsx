import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

interface RestaurantCardProps {
  restaurant: RestaurantDTO;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
}: {
  restaurant: RestaurantDTO;
}) => {
  return (
    <Card sx={{ border: "2px solid #ccc", boxShadow: "none" }}>
      <CardHeader
        avatar={
          <img
            src={restaurant.image}
            alt={restaurant.name}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        }
        title={
          <Stack spacing={0} justifyContent="center">
            <Typography variant="h6" lineHeight={0.5}>
              {restaurant.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Restauration {restaurant.cuisine}
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {restaurant.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {restaurant.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {restaurant.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {restaurant.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website:{" "}
          <Link target="_blank" href={restaurant.website}>
            {restaurant.website}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
