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
      async resolve(_, args, { prisma }) {
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

    t.nonNull.field("login", {
      type: "AuthPayload",
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },

      async resolve(_, { username, password }, { prisma }) {
        const user = await prisma.user.findUnique({
          //get user from db
          where: {
            username: username,
          },
        });

        if (!user) {
          throw new Error("No such user exists");
        }

        const valid = await bcrypt.compare(password, user.password); //check password matches

        if (!valid) {
          throw new Error("Invalid Password");
        }

        const token = jwt.sign(
          //create token
          { userId: user.id },
          process.env.APP_SECRET as string
        );

        return {
          user,
          token,
        };
      },
    });
  },
});
