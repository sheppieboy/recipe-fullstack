import { AvatarGroup, Avatar, Box, Typography } from "@mui/material";
import { LatestCommentsList } from "./LatestCommentsList";
import { RecentImageList } from "./RecentImageList";

export const Rightbar = () => {
  return (
    <Box sx={{ bgcolor: "red", flex: 2, p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 100, mt: 1, mb: 2 }}>
        Online Users
      </Typography>
      <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="" />
        <Avatar alt="Travis Howard" src="" />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar alt="Tever Henderson" src="" />
        <Avatar alt="" src="" />
        <Avatar alt="" src="" />
        <Avatar alt="" src="" />
        <Avatar alt="" src="" />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Latest Recipes
      </Typography>
      <RecentImageList />
      <Typography variant="h6" sx={{ fontWeight: 100, mt: 2, mb: 2 }}>
        Latest Comments
      </Typography>
      <LatestCommentsList />
    </Box>
  );
};
