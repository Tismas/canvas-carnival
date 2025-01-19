import { drizzle } from "drizzle-orm/neon-http";
import { getServerConfigValue } from "../config/serverConfig";

export const db = drizzle(getServerConfigValue("DATABASE_URL"));
