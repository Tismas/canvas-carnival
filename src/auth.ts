import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { getEnvVariable } from "./env";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db/db";

export const { auth, handlers } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: getEnvVariable("GITHUB_CLIENT_ID"),
      clientSecret: getEnvVariable("GITHUB_CLIENT_SECRET"),
    }),
    Credentials({
      credentials: {
        email: { type: "text" },
        username: { type: "text" },
        password: { type: "password" },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
