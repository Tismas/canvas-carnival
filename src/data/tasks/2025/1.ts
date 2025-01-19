import type { TaskData } from "@/data/events";

export const task: TaskData = {
  title: "Random lines",
  description: "Draw 100 random lines",
  hints: [
    "Math.random() returns random value between 0 and 1.",
    "You can multiply this random value to get a different range. Eg. Math.random() * canvas.width will get you random value between 0 and canvas.width",
    "Using moveTo and lineTo you can draw a line between 2 points.",
  ],
};
