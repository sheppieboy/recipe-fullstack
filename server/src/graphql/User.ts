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
    t.list.field("recipes", {
      type: "Recipe",
      resolve: ({ id }, _, { prisma }) => {
        return prisma.user
          .findUnique({
            where: { id: id },
          })
          .recipes();
      },
    });
  },
});
