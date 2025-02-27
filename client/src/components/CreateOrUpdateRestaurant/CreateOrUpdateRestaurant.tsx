import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid2";

interface CreateOrUpdateRestaurantProps {
  /**
   * Restaurant to create or update
   */
  restaurant: CreateRestaurantDTO;
  /**
   * Handle change for a restaurant
   * @param restaurant Restaurant to update
   * @returns void
   */
  handleChangeRestaurant: (restaurant: CreateRestaurantDTO) => void;
  /**
   * Handle save restaurant
   * @returns void
   */
  handleSaveRestaurant: () => void;
  /**
   * Handle cancel
   * @returns void
   */
  handleCancel: () => void;
}

const CreateOrUpdateRestaurant: React.FC<CreateOrUpdateRestaurantProps> = ({
  restaurant,
  handleChangeRestaurant,
  handleSaveRestaurant,
  handleCancel,
}) => {
  /**
   * Handle change for a restaurant field
   *
   * @param field Field to update
   * @param value Value to set
   */
  const handleChangeRestaurantField = (field: string, value: string) => {
    switch (field) {
      case "name":
        handleChangeRestaurant?.({ ...restaurant, name: value });
        break;
      case "cuisine":
        handleChangeRestaurant?.({ ...restaurant, cuisine: value });
        break;
      case "rating":
        handleChangeRestaurant?.({
          ...restaurant,
          rating: parseInt(value, 10),
        });
        break;
      case "address":
        handleChangeRestaurant?.({ ...restaurant, address: value });
        break;
      case "phone":
        handleChangeRestaurant?.({ ...restaurant, phone: value });
        break;
      case "website":
        handleChangeRestaurant?.({ ...restaurant, website: value });
        break;
      case "image":
        handleChangeRestaurant?.({ ...restaurant, image: value });
        break;
      default:
        break;
    }
  };
  return (
    <Box width={"100%"} height={"100%"}>
      <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
        <Typography variant="h3">Créer un restaurant :</Typography>
        <FormControl size="medium">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="name"
                label="Nom du restaurant"
                variant="outlined"
                value={restaurant.name}
                sx={{ background: "white", borderRadius: 1 }}
                onChange={(e) =>
                  handleChangeRestaurantField("name", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="specialty"
                label="Spécialité"
                variant="outlined"
                value={restaurant.cuisine}
                sx={{ background: "white", borderRadius: 1 }}
                onChange={(e) =>
                  handleChangeRestaurantField("cuisine", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="rating"
                label="Note"
                variant="outlined"
                type="number"
                sx={{ background: "white", borderRadius: 1 }}
                value={restaurant.rating}
                onChange={(e) =>
                  handleChangeRestaurantField("rating", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="address"
                label="Adresse"
                variant="outlined"
                value={restaurant.address}
                sx={{ background: "white", borderRadius: 1 }}
                onChange={(e) =>
                  handleChangeRestaurantField("address", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="phone"
                label="Téléphone"
                variant="outlined"
                type="phone"
                sx={{ background: "white", borderRadius: 1 }}
                value={restaurant.phone}
                onChange={(e) =>
                  handleChangeRestaurantField("phone", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="website"
                label="Site web"
                variant="outlined"
                value={restaurant.website}
                sx={{ background: "white", borderRadius: 1 }}
                onChange={(e) =>
                  handleChangeRestaurantField("website", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                id="image"
                label="Image"
                variant="outlined"
                value={restaurant.image}
                sx={{ background: "white", borderRadius: 1 }}
                onChange={(e) =>
                  handleChangeRestaurantField("image", e.target.value)
                }
                fullWidth
              />
            </Grid>
          </Grid>
          <Stack
            mt={2}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Button variant="contained" color="error" onClick={handleCancel}>
              Annuler
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveRestaurant}
            >
              Créer
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default CreateOrUpdateRestaurant;
