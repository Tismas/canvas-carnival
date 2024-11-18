import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { getEnvVariable } from "./env";
import { db } from "./db/db";
import { users } from "./db/schema";
import { LoginFormSchema } from "./app/(auth)/login/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

class InvalidCredentials extends CredentialsSignin {
  code = "InvalidCredentials";
}

export const { auth, handlers } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  providers: [
    GitHub({
      clientId: getEnvVariable("GITHUB_CLIENT_ID"),
      clientSecret: getEnvVariable("GITHUB_CLIENT_SECRET"),
    }),
    Credentials({
      credentials: {
        email: { type: "text" },
        name: { type: "text" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = await LoginFormSchema.validate(credentials);
        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email.toLowerCase()))
          .limit(1);
        if (!user?.password) {
          throw new InvalidCredentials();
        }
        if (!bcrypt.compareSync(password, user.password)) {
          throw new InvalidCredentials();
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
