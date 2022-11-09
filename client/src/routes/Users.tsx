import { Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { UserCard } from "../components/UserCard";

export const Users = () => {
  return (
    <Box sx={{ pt: 9 }}>
      <Typography>Users</Typography>
      <Stack>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Stack>
    </Box>
  );
};
