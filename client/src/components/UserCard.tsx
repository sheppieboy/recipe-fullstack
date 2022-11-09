import { Comment, Fastfood, Favorite } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export const UserCard = () => {
  const color = "#E89A96";
  const bgColor = "#D6FFFF";

  return (
    <Box sx={{ width: 300, p: 1.5 }}>
      <Card sx={{ bgcolor: bgColor }} elevation={4}>
        <CardActionArea>
          <CardHeader
            avatar={<Avatar>username</Avatar>}
            title={"username"}
            subheader={"date"}
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: color,
              }}
            >
              <Typography>42</Typography>
              <Favorite />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: color,
              }}
            >
              <Typography>46</Typography>
              <Comment />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: color,
              }}
            >
              <Typography>5</Typography>
              <Fastfood />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
