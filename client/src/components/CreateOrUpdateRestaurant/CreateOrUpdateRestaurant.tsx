import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid2";

interface CreateOrUpdateRestaurantProps {
  /**
   * Restaurant to create or update
   */
  fetchedRestaurant?: RestaurantDTO;
  /**
   * Handle save restaurant
   * @returns void
   */
  handleSaveRestaurant: (restaurant: CreateOrUpdateRestaurantDTO) => void;
  /**
   * Handle cancel
   * @returns void
   */
  handleCancel: () => void;
}

const CreateOrUpdateRestaurant: React.FC<CreateOrUpdateRestaurantProps> = ({
  fetchedRestaurant,
  handleSaveRestaurant,
  handleCancel,
}) => {
  // State for restaurant
  const [restaurant, setRestaurant] = useState<CreateOrUpdateRestaurantDTO>(
    fetchedRestaurant || {
      name: "",
      address: "",
      cuisine: "",
      rating: 0,
      phone: "",
      website: "",
      image: "",
    }
  );
  const handleChangeRestaurant = (restaurant: CreateOrUpdateRestaurantDTO) => {
    setRestaurant(restaurant);
  };

  const handleSave = () => {
    handleSaveRestaurant(restaurant);
  };

  /**
   * Handle change for a restaurant field
   *
   * @param field Field to update
   * @param value Value to set
   */
  const handleChangeRestaurantField = (field: string, value: string) => {
    const deconstructedRestaurant = {
      name: restaurant?.name || "",
      address: restaurant?.address || "",
      cuisine: restaurant?.cuisine || "",
      rating: restaurant?.rating || 0,
      phone: restaurant?.phone || "",
      website: restaurant?.website || "",
      image: restaurant?.image || "",
    };
    switch (field) {
      case "name":
        handleChangeRestaurant?.({ ...deconstructedRestaurant, name: value });
        break;
      case "cuisine":
        handleChangeRestaurant?.({
          ...deconstructedRestaurant,
          cuisine: value,
        });
        break;
      case "rating":
        handleChangeRestaurant?.({
          ...deconstructedRestaurant,
          rating: parseFloat(value),
        });
        break;
      case "address":
        handleChangeRestaurant?.({
          ...deconstructedRestaurant,
          address: value,
        });
        break;
      case "phone":
        handleChangeRestaurant?.({ ...deconstructedRestaurant, phone: value });
        break;
      case "website":
        handleChangeRestaurant?.({
          ...deconstructedRestaurant,
          website: value,
        });
        break;
      case "image":
        handleChangeRestaurant?.({ ...deconstructedRestaurant, image: value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (fetchedRestaurant) {
      setRestaurant(fetchedRestaurant);
    }
  }, [fetchedRestaurant]);

  const canSave =
    restaurant?.name &&
    restaurant?.cuisine &&
    restaurant?.address &&
    restaurant?.phone &&
    restaurant?.website &&
    restaurant?.image;

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
                value={restaurant?.name}
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
                value={restaurant?.cuisine}
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
                value={restaurant?.rating}
                onChange={(e) =>
                  handleChangeRestaurantField("rating", e.target.value)
                }
                slotProps={{
                  htmlInput: {
                    min: 0,
                    max: 5,
                    step: 0.1,
                  },
                }}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="address"
                label="Adresse"
                variant="outlined"
                value={restaurant?.address}
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
                value={restaurant?.phone}
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
                value={restaurant?.website}
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
                value={restaurant?.image}
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
              disabled={!canSave}
              onClick={handleSave}
            >
              {fetchedRestaurant ? "Sauvegarder" : "Créer"}
            </Button>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default CreateOrUpdateRestaurant;
