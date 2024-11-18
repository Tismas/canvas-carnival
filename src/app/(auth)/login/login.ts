import { signIn } from "next-auth/react";
import { LoginFormValues } from "./schema";

export const logIn = async ({ email, password }: LoginFormValues) => {
  const signInResult = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (signInResult?.error) {
    return "Invalid name or password";
  } else {
    return null;
  }
};
