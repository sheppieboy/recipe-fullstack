import { Stack, Typography, Box } from "@mui/material";

export const Profile = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Typography>Profile</Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ pt: 2 }}
      >
        <Box sx={{ bgcolor: "red", flex: 1, p: 2 }}>left side</Box>
        <Box sx={{ bgcolor: "blue", flex: 4, p: 2 }}>middle</Box>
        <Box sx={{ bgcolor: "yellow", flex: 2, p: 2 }}>right side</Box>
      </Stack>
    </Box>
  );
};
