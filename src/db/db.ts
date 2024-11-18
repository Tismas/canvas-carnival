import { drizzle } from "drizzle-orm/neon-http";
import { getEnvVariable } from "../env";

export const db = drizzle(getEnvVariable("DATABASE_URL"));
