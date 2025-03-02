import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

interface DishAccordionProps {
  dish: DishDTO;
  isEditMode: boolean;
  handleDelete?: () => void;
}

const DisplayDishAccordion: React.FC<DishAccordionProps> = ({
  dish,
  isEditMode,
  handleDelete,
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
      {isEditMode && (
        <AccordionActions>
          <Stack direction={"row"} spacing={1} justifyContent={"end"}>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleDelete}
            >
              Supprimer
            </Button>
          </Stack>
        </AccordionActions>
      )}
    </Accordion>
  );
};

export default DisplayDishAccordion;
