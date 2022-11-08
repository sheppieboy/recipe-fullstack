import {
  AddCircle,
  ArrowCircleRight,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  createTheme,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";

import { FakeRecipe } from "./types";

type Props = {
  recipe: FakeRecipe;
};

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);
  return color;
}

function getFirst2Letters(username: string) {
  return username.slice(0, 2);
}

const themeForToolTip = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontWeight: "light",
          color: "white",
          backgroundColor: "black",
        },
      },
    },
  },
});

export const Recipe = ({
  recipe: { username, image, date, description, title },
}: Props) => {
  return (
    <Card sx={{ m: 2 }} elevation={6}>
      <CardHeader
        avatar={
          <Tooltip title={username}>
            <Avatar sx={{ bgcolor: randomColor() }}>
              {getFirst2Letters(username)}
            </Avatar>
          </Tooltip>
        }
        action={
          <ThemeProvider theme={themeForToolTip}>
            <Tooltip title="See full recipe">
              <IconButton aria-label="go to recipe">
                <ArrowCircleRight />
              </IconButton>
            </Tooltip>
          </ThemeProvider>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="20%" image={image} alt={title} />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Like">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <ThemeProvider theme={themeForToolTip}>
          <Tooltip title="Add to Favourites">
            <IconButton aria-label="add to favourites">
              <AddCircle sx={{ color: randomColor() }} />
            </IconButton>
          </Tooltip>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
};
