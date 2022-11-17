import { extendType, nonNull, objectType, stringArg } from "nexus";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.nonNull.string("token");
    t.nonNull.field("user", {
      type: "User",
    });
  },
});

export const AuthMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("signup", {
      type: "AuthPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        username: nonNull(stringArg()),
      },
      async resolve(parent, args, { prisma }) {
        const { email, username } = args;

        const password = await bcrypt.hash(args.password, 10); //hash password

        const user = await prisma.user.create({
          //create user in database
          data: { email, username, password },
        });

        const token = jwt.sign(
          { userID: user.id },
          process.env.APP_SECRET as string
        ); //create user jwt token

        return {
          token,
          user,
        };
      },
    });
  },
});
