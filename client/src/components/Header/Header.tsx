import { Button, Link } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" noWrap color="white">
            MiHIHI
          </Typography>
        </Link>
        <Button component={Link} href="/restaurants" color="inherit">
          Restaurants
        </Button>
        <Button component={Link} href="/about" color="inherit">
          À Propos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
