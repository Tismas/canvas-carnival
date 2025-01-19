import { getClientConfigValue } from "@/config/clientConfig";
import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
  plugins: [nextCookies()],
  baseURL: getClientConfigValue("BASE_URL"),
});
