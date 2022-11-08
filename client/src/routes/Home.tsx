import { Box, Stack } from "@mui/material";
import { Feed } from "../components/Feed";
import { Rightbar } from "../components/Rightbar";

export const Home = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ pt: 9 }}
      >
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};
