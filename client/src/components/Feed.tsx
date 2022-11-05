import { Box, Typography } from "@mui/material";
import { Recipe } from "./Recipe";
import { fakeData } from "../fakeData";

export const Feed = () => {
  return (
    <Box sx={{ backgroundColor: "pink", flex: 4, p: 2 }}>
      <Typography>Feed</Typography>
      {fakeData.map((recipe, i) => (
        <Recipe recipe={recipe} key={i} />
      ))}
    </Box>
  );
};
