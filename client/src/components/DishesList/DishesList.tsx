import { Box, Button, Stack, Typography } from "@mui/material";

import CreateDishAccordion from "./CreateDishAccoridion";
import DisplayDishAccordion from "./DisplayDishAccordion";
import { dishApi } from "@/services/api";
import useDishes from "@/hooks/useDishes";
import { useState } from "react";

interface DishesListProps {
  restaurantId: number;
  isEditMode: boolean;
}

const DishesList: React.FC<DishesListProps> = ({
  restaurantId,
  isEditMode,
}) => {
  const { dishes, loading, error, refreshDishes } = useDishes(restaurantId);
  const [creating, setCreating] = useState<boolean>(false);

  const handleClickAddDish = () => {
    setCreating(true);
  };
  const handleCancelAddOrUpdate = () => {
    setCreating(false);
  };
  const handleCreateDish = (toCreate: CreateDishDTO) => {
    dishApi.create(restaurantId, toCreate).then(
      () => {
        setCreating(false);
        refreshDishes();
      },
      (error) => {
        console.error("Erreur lors de la création du plat:", error);
      }
    );
  };
  const handleDeleteDish = (dishId: number) => () => {
    dishApi.delete(restaurantId, dishId).then(
      () => {
        refreshDishes();
      },
      (error) => {
        console.error("Erreur lors de la suppression du plat:", error);
      }
    );
  };

  if (loading) return <Box>Chargement des plats...</Box>;
  if (error) return <Box>{error}</Box>;

  return (
    <>
      <Box justifyContent={"center"} display={"flex"}>
        <Typography variant="h3">Plats :</Typography>
      </Box>
      <Stack spacing={2}>
        {dishes.map((dish) => (
          <DisplayDishAccordion
            key={dish.id}
            dish={dish}
            isEditMode={isEditMode}
            handleDelete={handleDeleteDish(dish.id)}
          />
        ))}
        {isEditMode && creating && (
          <CreateDishAccordion
            handleCancel={handleCancelAddOrUpdate}
            handleSave={handleCreateDish}
          />
        )}
      </Stack>
      {isEditMode && !creating && (
        <Stack
          mt={2}
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClickAddDish}
          >
            Ajouter un plat
          </Button>
        </Stack>
      )}
    </>
  );
};

export default DishesList;
