import { Box, Typography } from "@mui/material";

const EmptyCart = () => {
  return (
    <Box sx={{ textAlign: "center", margin: 2 }}>
      <Typography variant="h4">Votre panier est vide.</Typography>
    </Box>
  );
};

export default EmptyCart;
