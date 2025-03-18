import { Box, Stack, Typography } from "@mui/material";

interface CartItemsListProps {
  cartItems: CartItemType[];
}

const CartItemsList: React.FC<CartItemsListProps> = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item) => (
        <Box
          key={`${item.restaurantId}-${item.dishId}`}
          sx={{ border: "1px solid #ccc", padding: 1, borderRadius: 1 }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography>{item.name}</Typography>
            <Typography>{item.price}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Quantity: {item.quantity}</Typography>
            <Typography>Total: {item.price * item.quantity}</Typography>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default CartItemsList;
