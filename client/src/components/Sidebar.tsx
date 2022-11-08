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
  Tooltip,
} from "@mui/material";

export const Sidebar = () => {
  return (
    <Box position="fixed">
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
