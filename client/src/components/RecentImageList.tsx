import { ArrowCircleRight } from "@mui/icons-material";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tooltip,
} from "@mui/material";
import { fakeData } from "../fakeData";

export const RecentImageList = () => {
  return (
    <ImageList>
      {fakeData.map((recipe) => (
        <ImageListItem key={recipe.image}>
          <img
            src={`${recipe.image}?w=248&fit=crop&auto=format`}
            srcSet={`${recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={recipe.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={recipe.title}
            subtitle={`@${recipe.username}`}
            actionIcon={
              <Tooltip title="check recipe out">
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${recipe.title}`}
                >
                  <ArrowCircleRight />
                </IconButton>
              </Tooltip>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
