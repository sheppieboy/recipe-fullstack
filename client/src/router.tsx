import { createBrowserRouter, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Favorites } from "./routes/Favorites";
import { Home } from "./routes/Home";
import { Profile } from "./routes/Profile";
import { Users } from "./routes/Users";
import { Settings } from "./routes/Settings";
import { Box, Stack } from "@mui/material";
import { Sidebar } from "./components/Sidebar";

const AppLayout = () => (
  <>
    <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Box sx={{ flex: 1, pt: 9 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 6 }}>
        <Outlet />
      </Box>
    </Stack>
  </>
);

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
