"use server";

import { db } from "@/db/db";
import { tasks, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const completeTask = async (
  userEmail: string,
  year: string,
  taskNumber: string
) => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, userEmail))
    .limit(1);

  if (!user) return;

  const [task] = await db
    .select()
    .from(tasks)
    .where(
      and(
        eq(tasks.userId, user.id),
        eq(tasks.event, Number(year)),
        eq(tasks.taskNumber, Number(taskNumber))
      )
    );
  if (!task) {
    await db.insert(tasks).values({
      event: Number(year),
      taskNumber: Number(taskNumber),
      completedAt: new Date(),
      userId: user.id,
    });
  } else {
    await db
      .update(tasks)
      .set({ completedAt: new Date() })
      .where(
        and(
          eq(tasks.userId, user.id),
          eq(tasks.event, Number(year)),
          eq(tasks.taskNumber, Number(taskNumber))
        )
      );
  }

  revalidatePath("/events");
};
