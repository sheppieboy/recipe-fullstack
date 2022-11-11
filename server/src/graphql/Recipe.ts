import { asNexusMethod, objectType } from "nexus";
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
