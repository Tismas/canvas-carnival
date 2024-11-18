import { db } from "@/db/db";
import { tasks } from "@/db/schema";
import { User } from "@/hooks/useUser";
import { and, eq } from "drizzle-orm";

export const isTaskDone = async (
  user: User,
  year: string,
  taskNumber: string
): Promise<boolean> => {
  const [userTask] = await db
    .select()
    .from(tasks)
    .where(
      and(
        eq(tasks.userId, user.id),
        eq(tasks.event, Number(year)),
        eq(tasks.taskNumber, Number(taskNumber))
      )
    );

  return Boolean(userTask?.completedAt);
};
