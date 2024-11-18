import { addDays } from "date-fns";
import fs from "fs";
import path from "path";

export interface TaskData {
  title: string;
  description: string;
  hints: string[];
}

export interface Task {
  task: TaskData;
  unlockedAt: Date;
}

type Event = Record<string, Task>;
type Events = Record<string, Event>;

const startDate = new Date("2024-11-17");
const tasksDir = path.resolve(process.cwd(), "src", "data", "tasks");

const parseTask = async (year: string, taskNumber: string): Promise<Task> => {
  const { task } = await import(path.resolve(tasksDir, year, taskNumber));
  const unlockedAt = addDays(startDate, Number(taskNumber) - 1);

  return {
    task,
    unlockedAt,
  };
};

export const events: Events = {};

for (const year of fs.readdirSync(tasksDir)) {
  events[year] = {};
  for (const taskFileName of fs.readdirSync(path.resolve(tasksDir, year))) {
    const taskNumber = taskFileName.replace(".ts", "");
    events[year][taskNumber] = await parseTask(year, taskNumber);
  }
}

const fileContent =
  "export const events = " + JSON.stringify(events, null, 2) + " as const;";

fs.writeFileSync(
  path.resolve(tasksDir, "..", "generated", "events.ts"),
  fileContent
);
