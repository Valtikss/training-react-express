import { Box, Button, Stack } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useCartStore } from "@/store";

const Header = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box display="flex" alignItems="center">
            <Button href="/" color="inherit">
              <Typography variant="h6" noWrap color="white">
                MiHIHI
              </Typography>
            </Button>
            <Button href="/restaurants" color="inherit">
              Restaurants
            </Button>
            <Button href="/about" color="inherit">
              À Propos
            </Button>
          </Box>
          <Box>
            <Button href="/cart" color="inherit">
              Panier {cart.length > 0 && `(${cart.length})`}
            </Button>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
