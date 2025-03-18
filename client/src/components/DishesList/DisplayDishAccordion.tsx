import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

import DisplayDishAccordionActions from "./DisplayDishAccordionActions";

interface DishAccordionProps {
  dish: DishDTO;
  isEditMode: boolean;
  handleClickAction: () => void;
  handleIncreaseQuantity?: () => void;
  handleDecreaseQuantity?: () => void;
  nbInCart: number;
}

const DisplayDishAccordion: React.FC<DishAccordionProps> = ({
  dish,
  isEditMode,
  handleClickAction,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  nbInCart,
}) => {
  return (
    <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
      <AccordionSummary>
        <Stack direction={"row"} alignItems={"center"}>
          <Avatar
            src={dish.image}
            sx={{ mr: 2, borderRadius: 2 }}
            variant="rounded"
          />
          {dish.name}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 1 }}>
        <div>{dish.description}</div>
        <div>{dish.price} €</div>
      </AccordionDetails>
      <DisplayDishAccordionActions
        isEditMode={isEditMode}
        handleClickAction={handleClickAction}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        nbInCart={nbInCart}
      />
    </Accordion>
  );
};

export default DisplayDishAccordion;
