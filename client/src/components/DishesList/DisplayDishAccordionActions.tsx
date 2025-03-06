import {
  AccordionActions,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";

interface DisplayDishAccordionActionProps {
  isEditMode: boolean;
  handleClickAction: () => void;
  handleIncreaseQuantity?: () => void;
  handleDecreaseQuantity?: () => void;
  nbInCart: number;
}

const DisplayDishAccordionActions: React.FC<
  DisplayDishAccordionActionProps
> = ({
  isEditMode,
  handleClickAction,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  nbInCart,
}) => {
  const simpleButton = (
    <Button
      variant="contained"
      color={isEditMode ? "error" : "primary"}
      size="small"
      onClick={handleClickAction}
    >
      {isEditMode ? "Supprimer" : "Ajouter au panier"}
    </Button>
  );
  const fieldWithButton = (
    <OutlinedInput
      size="small"
      sx={{
        textAlign: "center",
        "& input": { textAlign: "center" },
        maxWidth: 150,
      }}
      inputMode="numeric"
      value={nbInCart}
      endAdornment={
        <InputAdornment position="end" sx={{ marginLeft: 0 }}>
          <IconButton onClick={handleIncreaseQuantity}>+</IconButton>
        </InputAdornment>
      }
      startAdornment={
        <InputAdornment position="start" sx={{ marginRight: 0 }}>
          <IconButton onClick={handleDecreaseQuantity}>-</IconButton>
        </InputAdornment>
      }
    />
  );
  return (
    <AccordionActions>
      <Stack direction={"row"} spacing={1} justifyContent={"end"}>
        {isEditMode
          ? simpleButton
          : nbInCart > 0
          ? fieldWithButton
          : simpleButton}
      </Stack>
    </AccordionActions>
  );
};

export default DisplayDishAccordionActions;
