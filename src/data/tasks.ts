import { addDays } from "date-fns";

export interface UnlockedTask {
  id: number;
  title: string;
  description: string;
  hints: string[];
  // exampleSolution: string;
  isUnlocked: true;
}
export interface LockedTask {
  id: number;
  isUnlocked: false;
  unlockedAt: Date;
}

export type Task = LockedTask | UnlockedTask;

export const tasks: Array<Task> = [
  {
    id: 1,
    title: "Random lines",
    description: "Draw 100 lines between random points",
    hints: [
      "Use lineTo and moveTo to connect 100 random points to each other.",
      "Math.random() returns random value between 0 and 1.",
      "You can multiply this random value to get a different range. Eg. Math.random() * canvas.width will get you random value between 0 and canvas.width",
    ],
    isUnlocked: true,
  },
  {
    id: 2,
    isUnlocked: false,
    unlockedAt: addDays(new Date(), 1),
  },
  {
    id: 3,
    isUnlocked: false,
    unlockedAt: addDays(new Date(), 2),
  },
];
