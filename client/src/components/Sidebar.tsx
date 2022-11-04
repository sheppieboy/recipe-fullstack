import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";

export const Sidebar = () => {
  return (
    <Box sx={{ flex: 1, p: 2, bgcolor: "yellow" }}>
      <Typography>Sidebar</Typography>
      <List>
        {/*Homepage */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        {/* Profile */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* All Users page */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        {/* Settings */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        {/* Dark Mode*/}
        <ListItem>
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch />
        </ListItem>
      </List>
    </Box>
  );
};
