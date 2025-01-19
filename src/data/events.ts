import { isBefore } from "date-fns";
import { events } from "./generated/events";
import { UserDto } from "@/db/types";
import { db } from "@/db/db";
import { task } from "@/db/schema";
import { and, eq } from "drizzle-orm";

type Events = typeof events;
type EventYear = keyof Events;
type TaskNumber<T extends EventYear> = keyof Events[T];

export interface TaskData {
  readonly title: string;
  readonly description: string;
  readonly hints: ReadonlyArray<string>;
}
interface ParsedTaskData {
  readonly task: TaskData;
  readonly unlockedAt: string;
}

interface TaskBase {
  taskNumber: string;
}

export interface UnlockedTaskData extends TaskBase {
  isUnlocked: true;
  task: TaskData;
  isDone: boolean;
}
export interface LockedTaskData extends TaskBase {
  isUnlocked: false;
  unlockedAt: Date;
}
export type Task = UnlockedTaskData | LockedTaskData;

export const getEvents = () => {
  return Object.keys(events);
};

export const isTaskDone = async (
  actor: UserDto,
  year: string,
  taskNumber: string
): Promise<boolean> => {
  const [userTask] = await db
    .select()
    .from(task)
    .where(
      and(
        eq(task.userId, actor.id),
        eq(task.event, Number(year)),
        eq(task.taskNumber, Number(taskNumber))
      )
    );

  return Boolean(userTask?.completedAt);
};

export const getTasks = <const T extends EventYear>(user: UserDto, year: T) => {
  return Promise.all(
    Object.entries(events[year]).map(([taskNumber]) =>
      getTask(user, year, taskNumber as TaskNumber<T>)
    )
  );
};

export const getTask = async <const T extends EventYear>(
  user: UserDto,
  year: T,
  taskNumber: TaskNumber<T>
): Promise<Task> => {
  const { task, unlockedAt } = events[year][taskNumber] as ParsedTaskData;
  const isUnlocked = isBefore(unlockedAt, new Date());

  if (isUnlocked) {
    return {
      isUnlocked: true,
      taskNumber: taskNumber as string,
      task: task,
      isDone: await isTaskDone(user, year, taskNumber as string),
    };
  } else {
    return {
      isUnlocked: false,
      taskNumber: taskNumber as string,
      unlockedAt: new Date(unlockedAt),
    };
  }
};

export const isValidEventYear = (year: string): year is EventYear => {
  return getEvents().includes(year);
};
export const isValidTaskNumber = <const T extends EventYear>(
  year: T,
  taskNumber: string | number | symbol
): taskNumber is TaskNumber<T> => {
  return Object.keys(events[year]).includes(taskNumber as string);
};
