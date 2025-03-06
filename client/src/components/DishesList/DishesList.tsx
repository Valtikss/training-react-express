import { Box, Button, Stack, Typography } from "@mui/material";
import { useCartStore, useToastStore } from "@/store";
import { useEffect, useState } from "react";

import CreateDishAccordion from "./CreateDishAccoridion";
import DisplayDishAccordion from "./DisplayDishAccordion";
import { dishApi } from "@/services/api";
import useDishes from "@/hooks/useDishes";

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

  const setToast = useToastStore((state) => state.setToast);
  const { addToCart, increaseQuantity, decreaseQuantity, getQuantity } =
    useCartStore((state) => state);
  const handleCreateDish = (toCreate: CreateDishDTO) => {
    dishApi.create(restaurantId, toCreate).then(
      () => {
        setCreating(false);
        refreshDishes();
        setToast({
          message: "Plat créé avec succès",
          type: "success",
          isOpen: true,
        });
      },
      (error) => {
        console.error("Erreur lors de la création du plat:", error);
        setToast({
          message: "Erreur lors de la création du plat",
          type: "error",
          isOpen: true,
        });
      }
    );
  };
  const handleDeleteDish = (dishId: number) => () => {
    window.confirm("Voulez-vous vraiment supprimer ce plat ?") &&
      dishApi.delete(restaurantId, dishId).then(
        () => {
          refreshDishes();
          setToast({
            message: "Plat supprimé avec succès",
            type: "success",
            isOpen: true,
          });
        },
        (error) => {
          console.error("Erreur lors de la suppression du plat:", error);
          setToast({
            message: "Erreur lors de la suppression du plat",
            type: "error",
            isOpen: true,
          });
        }
      );
  };
  const handleAddToCart = (dish: DishDTO) => () => {
    addToCart({
      restaurantId: restaurantId,
      dishId: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: 1,
    });
    setToast({
      message: "Plat ajouté au panier",
      type: "success",
      isOpen: true,
    });
  };
  const handleIncreaseQuantity = (dishId: number) => () => {
    increaseQuantity(restaurantId, dishId);
  };
  const handleDecreaseQuantity = (dishId: number) => () => {
    decreaseQuantity(restaurantId, dishId);
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
            nbInCart={getQuantity(restaurantId, dish.id)}
            isEditMode={isEditMode}
            handleClickAction={
              isEditMode ? handleDeleteDish(dish.id) : handleAddToCart(dish)
            }
            handleIncreaseQuantity={handleIncreaseQuantity(dish.id)}
            handleDecreaseQuantity={handleDecreaseQuantity(dish.id)}
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
