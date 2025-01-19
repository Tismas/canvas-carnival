"use server";

import { db } from "@/db/db";
import { task, user } from "@/db/schema";
import { TaskDto, UserDto } from "@/db/types";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const completeTask = async (
  actor: UserDto,
  year: string,
  taskNumber: string
): Promise<TaskDto | null> => {
  const [signedInUser] = await db
    .select()
    .from(user)
    .where(eq(user.email, actor.email))
    .limit(1);

  if (!signedInUser) return null;

  const [completedTask] = await db
    .select()
    .from(task)
    .where(
      and(
        eq(task.userId, signedInUser.id),
        eq(task.event, Number(year)),
        eq(task.taskNumber, Number(taskNumber))
      )
    );
  if (!completedTask) {
    await db.insert(task).values({
      event: Number(year),
      taskNumber: Number(taskNumber),
      completedAt: new Date(),
      userId: signedInUser.id,
    });
  } else {
    await db
      .update(task)
      .set({ completedAt: new Date() })
      .where(
        and(
          eq(task.userId, signedInUser.id),
          eq(task.event, Number(year)),
          eq(task.taskNumber, Number(taskNumber))
        )
      );
  }

  revalidatePath("/events");

  return completedTask;
};
