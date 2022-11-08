import {
  AccountBox,
  Collections,
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
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Box position="fixed">
      <List>
        {/*Homepage */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"/"}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        {/* Profile */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"profile"}>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* All Users page */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"users"}>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        {/* All Favorites page */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"favorites"}>
            <ListItemIcon>
              <Collections />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </ListItem>
        {/* Settings */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to={"settings"}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        {/* Dark Mode*/}
        <ListItem>
          <Tooltip title="Darkmode">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
          </Tooltip>
          <Switch />
        </ListItem>
      </List>
    </Box>
  );
};
