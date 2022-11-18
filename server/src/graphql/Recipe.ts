import {
  asNexusMethod,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

import { DateTimeResolver } from "graphql-scalars";
export const DateTime = asNexusMethod(DateTimeResolver, "date");

export const Recipe = objectType({
  name: "Recipe",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.string("description");
    t.nonNull.string("instructions");
    t.nonNull.string("imageURL");
    t.nonNull.int("likeCount");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.field("author", {
      type: "User",
      resolve: ({ id }, _, { prisma }) => {
        return prisma.recipe
          .findUnique({
            where: { id: id },
          })
          .author();
      },
    });
  },
});

export const RecipeMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addRecipe", {
      type: "Recipe",
      args: {
        title: nonNull(stringArg()),
        imageURL: nonNull(stringArg()),
        description: nonNull(stringArg()),
        instructions: nonNull(stringArg()),
      },

      async resolve(
        _,
        { title, imageURL, description, instructions },
        context
      ) {
        const { userId } = context;

        if (!userId) {
          throw new Error("Cannot add a recipe without logging in");
        }

        const newRecipe = await context.prisma.recipe.create({
          data: {
            title,
            imageURL,
            description,
            instructions,
            author: { connect: { id: userId } },
          },
        });

        return newRecipe;
      },
    });
  },
});
export const RecipeQuery = extendType({
  type: "Query",
  definition(t) {
    t.nullable.field("findRecipe", {
      type: "Recipe",
      args: {
        id: nonNull(intArg()),
      },
      resolve(_, { id }, { prisma }) {
        return prisma.recipe.findUnique({
          where: { id: id },
        });
      },
    });
  },
});
