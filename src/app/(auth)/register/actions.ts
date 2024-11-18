"use server";

import { RegisterFormSchema, RegisterFormValues } from "./schema";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

interface Result {
  error: string | null;
}

export const createAccount = async (
  values: RegisterFormValues
): Promise<Result> => {
  try {
    RegisterFormSchema.validateSync(values);
  } catch {
    return { error: "Invalid credentials." };
  }
  try {
    const email = values.email.toLowerCase();
    const password = await bcrypt.hash(values.password, 10);
    const name = values.name;

    const existingUser = await db
      .select({ email: users.email })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (existingUser.length > 0) {
      return { error: "User with this email already exists." };
    }

    await db.insert(users).values({
      name,
      email,
      password,
    });

    return { error: null };
  } catch {
    return { error: "Something went wrong. Try again later." };
  }
};
