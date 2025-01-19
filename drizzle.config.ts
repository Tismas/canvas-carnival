import { getServerConfigValue } from "@/config/serverConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: getServerConfigValue("DATABASE_URL"),
  },
});
