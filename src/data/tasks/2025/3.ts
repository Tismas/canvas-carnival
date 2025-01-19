import type { TaskData } from "@/data/events";

export const task: TaskData = {
  title: "A follower",
  description:
    "Draw a ball that starts at the center of the screen and moves towards the mouse. It should move with limited speed and change color if mouse is inside it.",
  hints: [
    "You can use Math.atan2 to get the angle between ball and mouse.",
    "You can use that angle to get velocity for x(Math.cos) and y(Math.sin).",
    "You can add that velocity to the ball position to make the ball move towards the mouse. Remember to limit the velocity.",
    "You can use setInterval to keep drawing and updating canvas eg. 60 times a second - setInterval(aFunction, 1000/60)",
  ],
};
