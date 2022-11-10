import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("username");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.int("recipesCount");
    t.nonNull.int("likesCount");
    t.nonNull.int("commentsCount");
  },
});
