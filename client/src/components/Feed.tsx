import { Box } from "@mui/material";
import { Recipe } from "./Recipe";
import { fakeData } from "../fakeData";

export const Feed = () => {
  return (
    <Box sx={{ flex: 4, p: 1 }}>
      {fakeData.map((recipe, i) => (
        <Recipe recipe={recipe} key={i} />
      ))}
    </Box>
  );
};
