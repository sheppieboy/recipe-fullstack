import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
}) as typeof Toolbar;

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar>
      <StyledToolbar>
        <Typography>Logo</Typography>
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: 50, height: 50 }} onClick={() => setOpen(true)}>
            username
          </Avatar>
        </Box>
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="user-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={Link} to={"profile"}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to={"settings"}>
          Settings
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
