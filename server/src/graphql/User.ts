import { intArg, nonNull, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("username");
    t.nonNull.string("email");
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

export const UserQuery = objectType({
  name: "Query",
  definition(t) {
    t.nonNull.list.field("allUsers", {
      type: "User",
      resolve: (_, __, context) => {
        return context.prisma.user.findMany();
      },
    });

    t.nullable.field("findUser", {
      type: "User",
      args: {
        id: nonNull(intArg()),
      },
      resolve(_, { id }, { prisma }) {
        return prisma.user.findUnique({
          where: { id: id },
        });
      },
    });
  },
});
