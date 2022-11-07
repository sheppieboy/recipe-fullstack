import { createBrowserRouter, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Favorites } from "./routes/Favorites";
import { Home } from "./routes/Home";
import { Profile } from "./routes/Profile";
import { Users } from "./routes/Users";
import { Settings } from "./routes/Settings";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
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
