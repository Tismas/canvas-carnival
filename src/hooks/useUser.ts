import { auth } from "@/auth";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import { eq, InferSelectModel } from "drizzle-orm";
import { redirect } from "next/navigation";

export type User = Omit<InferSelectModel<typeof users>, "password">;

export const useUser = async (): Promise<User> => {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email))
    .limit(1);

  if (!user) {
    redirect("/login");
  }
  const { password, ...rest } = user;

  return rest;
};
