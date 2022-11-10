import { inputObjectType } from "nexus";

export const RecipeCreateInput = inputObjectType({
  name: "RecipeCreateInput",
  definition(t) {
    t.nonNull.string("title");
    t.nonNull.string("description");
    t.nonNull.string("instructions");
    t.nonNull.string("imageURL");
  },
});
