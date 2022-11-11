import { inputObjectType } from "nexus";
import { RecipeCreateInput } from "./RecipeCreateInput";

export const UserCreateInput = inputObjectType({
  name: "UserCreateInput",
  definition(t) {
    t.nonNull.string("username");
    t.list.nonNull.field("recipes", { type: RecipeCreateInput });
  },
});
