import { isBefore } from "date-fns";
import { events } from "./generated/events";

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

export interface UnlockedTaskData {
  isUnlocked: true;
  taskNumber: string;
  task: TaskData;
}
export interface LockedTaskData {
  isUnlocked: false;
  taskNumber: string;
  unlockedAt: Date;
}
export type Task = UnlockedTaskData | LockedTaskData;

export const getEvents = () => {
  return Object.keys(events);
};

export const getTasks = <const T extends EventYear>(year: T) => {
  return Object.entries(events[year]).map(([taskNumber]) =>
    getTask(year, taskNumber as TaskNumber<T>)
  );
};

export const getTask = <const T extends EventYear>(
  year: T,
  taskNumber: TaskNumber<T>
): Task => {
  const { task, unlockedAt } = events[year][taskNumber] as ParsedTaskData;
  const isUnlocked = isBefore(unlockedAt, new Date());

  if (isUnlocked) {
    return {
      isUnlocked: true,
      taskNumber: taskNumber as string,
      task: task,
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
