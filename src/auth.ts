import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { createUser, findUser } from "./data/user";

export const { auth, handlers } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // @ts-ignore error on their side
      profile: async (profile) => {
        await createUser({
          username: profile.name,
          email: profile.email,
          avatar: profile.avatar_url,
        });

        return profile;
      },
    }),
    Credentials({
      credentials: {
        email: { type: "text" },
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        return findUser(credentials);
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
