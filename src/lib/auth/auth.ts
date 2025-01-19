import { db } from "@/db/db";
import { getServerConfigValue } from "@/config/serverConfig";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "../../db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: getServerConfigValue("GITHUB_CLIENT_ID"),
      clientSecret: getServerConfigValue("GITHUB_CLIENT_SECRET"),
    },
  },
});
