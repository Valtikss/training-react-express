import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

import Grid from "@mui/material/Grid2";

interface CreateDishAccordionProps {
  /**
   * The function to call when creation or update is saved
   * @type {(dish: CreateDishDTO) => void}
   * @memberof CreateDishAccordionProps
   */
  handleSave: (dish: CreateDishDTO) => void;
  /**
   * The function to call when creation or update is cancelled
   * @type {() => void}
   * @memberof CreateDishAccordionProps
   */
  handleCancel: () => void;
}

const CreateDishAccordion: React.FC<CreateDishAccordionProps> = ({
  handleCancel,
  handleSave,
}) => {
  const [toCreate, setToCreate] = useState<CreateDishDTO>({
    name: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleCreate = () => {
    handleSave(toCreate);
  };
  const handleFieldChange =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      switch (field) {
        case "price":
          if (isNaN(Number(event.target.value))) {
            return;
          }
          setToCreate({ ...toCreate, [field]: parseFloat(event.target.value) });
          break;
        default:
          setToCreate({ ...toCreate, [field]: event.target.value });
          break;
      }
    };

  return (
    <Accordion slotProps={{ transition: { unmountOnExit: true } }} expanded>
      <AccordionSummary>
        <Stack direction={"row"} alignItems={"center"}>
          <Avatar
            src={toCreate.image ?? null}
            sx={{ mr: 2, borderRadius: 2 }}
            variant="rounded"
          >
            {toCreate.image ? null : "Pic"}
          </Avatar>
          {toCreate.name === "" ? "Nouveau plat" : toCreate.name}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Nom"
              value={toCreate.name}
              onChange={handleFieldChange("name")}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Description"
              value={toCreate.description}
              onChange={handleFieldChange("description")}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Prix"
              type="number"
              value={toCreate.price}
              onChange={handleFieldChange("price")}
              slotProps={{
                htmlInput: {
                  min: 0,
                  step: 0.1,
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Image"
              value={toCreate.image}
              onChange={handleFieldChange("image")}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
      <AccordionActions>
        <Stack direction={"row"} spacing={1} justifyContent={"end"}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleCancel}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleCreate}
          >
            Enregistrer
          </Button>
        </Stack>
      </AccordionActions>
    </Accordion>
  );
};

export default CreateDishAccordion;
