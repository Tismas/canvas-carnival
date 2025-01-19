import { db } from "@/db/db";
import { user } from "@/db/schema";
import { UserDto } from "@/db/types";
import { auth } from "@/lib/auth/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getSignedInUser = async (): Promise<UserDto> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user?.email) redirect("/sign-in");

  const [signedInUser] = await db
    .select()
    .from(user)
    .where(eq(user.email, session.user.email))
    .limit(1);

  if (!signedInUser) {
    redirect("/sign-in");
  }

  return signedInUser;
};
