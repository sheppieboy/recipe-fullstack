import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { UserCard } from "../components/UserCard";

export const Users = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="start-left"
        alignItems="center"
        flexWrap="wrap"
        sx={{ pt: 9 }}
      >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Stack>
    </Box>
  );
};
